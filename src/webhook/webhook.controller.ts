import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post(':cronJobId')
  async receiveWebhook(@Param('cronJobId') cronJobId: string, @Body() data: Record<string, any>) {
    return this.webhookService.storeWebhookData(cronJobId, data);
  }

  @Get()
  async getAllWebhooks() {
    return this.webhookService.getAll();
  }
}
