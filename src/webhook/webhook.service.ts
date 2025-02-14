import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Webhook, WebhookDocument } from './webhook.schema';

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);

  constructor(@InjectModel(Webhook.name) private webhookModel: Model<WebhookDocument>) {}

  async storeWebhookData(cronJobId: string, data: Record<string, any>): Promise<Webhook> {
    const webhook = new this.webhookModel({ cronJobId, data });
    await webhook.save();
    this.logger.log(`Webhook received for CronJob ${cronJobId}`);
    return webhook;
  }

  async getAll(): Promise<Webhook[]> {
    return this.webhookModel.find().populate('cronJobId').exec();
  }
}
