import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { History, HistoryDocument } from './history.schema';

@Injectable()
export class HistoryService {
  private readonly logger = new Logger(HistoryService.name);

  constructor(@InjectModel(History.name) private historyModel: Model<HistoryDocument>) {}

  async logExecution(cronJobId: string, response: Record<string, any>, status: string): Promise<History> {
    const execution = new this.historyModel({
      cronJobId,
      executedAt: new Date(),
      response,
      status,
    });

    await execution.save();
    this.logger.log(`Execution logged for CronJob ${cronJobId} with status: ${status}`);
    return execution;
  }

  async getAll(): Promise<History[]> {
    return this.historyModel.find().populate('cronJobId').exec();
  }

  async getByCronJob(cronJobId: string): Promise<History[]> {
    return this.historyModel.find({ cronJobId }).exec();
  }
}
