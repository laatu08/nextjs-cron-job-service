import { Controller, Get, Post, Put, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { CronJobService } from './cron-job.service';
import { CronJob } from './cron-job.schema';
import { Throttle,ThrottlerGuard } from '@nestjs/throttler';

@Controller('cron-jobs')
@UseGuards(ThrottlerGuard)
export class CronJobController {
  constructor(private readonly cronJobService: CronJobService) {}

  @Post()
  @Throttle({default:{limit:5, ttl:60000}})
  create(@Body() cronJob: Partial<CronJob>) {
    return this.cronJobService.create(cronJob);
  }

  @Get()
  @Throttle({default:{limit:10, ttl:60000}})
  getAll() {
    return this.cronJobService.getAll();
  }

  @Get(':id')
  @Throttle({default:{limit:10, ttl:60000}})
  getById(@Param('id') id: string) {
    return this.cronJobService.getById(id);
  }

  @Put(':id')
  @Throttle({default:{limit:3, ttl:60000}})
  update(@Param('id') id: string, @Body() cronJob: Partial<CronJob>) {
    return this.cronJobService.update(id, cronJob);
  }

  @Delete(':id')
  @Throttle({default:{limit:3, ttl:60000}})
  delete(@Param('id') id: string) {
    return this.cronJobService.delete(id);
  }
}
