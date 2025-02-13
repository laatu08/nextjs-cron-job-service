import { Controller, Get, Post, Put, Body, Delete, Param } from '@nestjs/common';
import { CronJobService } from './cron-job.service';
import { CronJob } from './cron-job.schema';

@Controller('cron-jobs')
export class CronJobController {
  constructor(private readonly cronJobService: CronJobService) {}

  @Post()
  create(@Body() cronJob: Partial<CronJob>) {
    return this.cronJobService.create(cronJob);
  }

  @Get()
  getAll() {
    return this.cronJobService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.cronJobService.getById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cronJob: Partial<CronJob>) {
    return this.cronJobService.update(id, cronJob);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cronJobService.delete(id);
  }
}
