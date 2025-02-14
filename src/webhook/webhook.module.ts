import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { Webhook, WebhookSchema } from './webhook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }])],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
