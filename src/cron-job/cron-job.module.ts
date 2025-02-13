import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CronJobService } from './cron-job.service';
import { CronJobController } from './cron-job.controller';
import { CronJob, CronJobSchema } from './cron-job.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CronJob.name, schema: CronJobSchema }])],
  controllers: [CronJobController],
  providers: [CronJobService],
})
export class CronJobModule {}
