import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CronJob, CronJobDocument } from './cron-job.schema';
import * as cron from 'node-cron';
import axios from 'axios';

@Injectable()
export class CronJobService {
  private readonly logger = new Logger(CronJobService.name);

  constructor(@InjectModel(CronJob.name) private cronJobModel: Model<CronJobDocument>) {}

  async create(cronJob: Partial<CronJob>): Promise<CronJob> {
    const createdJob = new this.cronJobModel(cronJob);
    await createdJob.save();
    this.scheduleCronJob(createdJob);
    return createdJob;
  }

  async getAll(): Promise<CronJob[]> {
    return this.cronJobModel.find().exec();
  }

  async delete(id: string): Promise<void> {
    await this.cronJobModel.findByIdAndDelete(id);
  }

  async getById(id: string): Promise<CronJob | null> {
    return this.cronJobModel.findById(id).exec();
  }
  
  async update(id: string, cronJob: Partial<CronJob>): Promise<CronJob | null> {
    const updatedJob = await this.cronJobModel.findByIdAndUpdate(id, cronJob, { new: true }).exec();
    if (updatedJob) {
      this.scheduleCronJob(updatedJob); // Reschedule if needed
    }
    return updatedJob;
  }
  
  

  private async executeCronJob(job: CronJob) {
    try {
      const response = await axios.post(job.url, {}, { headers: { 'API-Key': job.apiKey } });
      this.logger.log(`Cron Job ${job.name} executed successfully: ${response.status}`);
    } catch (error) {
      this.logger.error(`Cron Job ${job.name} failed: ${error.message}`);
    }
  }

  private scheduleCronJob(job: CronJob) {
    if (!job.isActive) return;
    cron.schedule(job.schedule, () => this.executeCronJob(job));
    this.logger.log(`Scheduled cron job: ${job.name}`);
  }
}
