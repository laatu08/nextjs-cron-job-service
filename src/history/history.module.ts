import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { History, HistorySchema } from './history.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: History.name, schema: HistorySchema }])],
  controllers: [HistoryController],
  providers: [HistoryService],
  exports: [HistoryService], // Export to be used in CronJob execution
})
export class HistoryModule {}
