import { Controller, Get, Param } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  async getAllExecutions() {
    return this.historyService.getAll();
  }

  @Get(':cronJobId')
  async getExecutionsByCronJob(@Param('cronJobId') cronJobId: string) {
    return this.historyService.getByCronJob(cronJobId);
  }
}
