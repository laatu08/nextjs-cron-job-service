import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

export type WebhookDocument = Webhook & Document;

@Schema({ timestamps: true })
export class Webhook {
  @Prop({ type: Types.ObjectId, ref: 'CronJob', required: true })
  cronJobId: Types.ObjectId; // Reference to the cron job that triggered this webhook

  @Prop({ type: Object, required: true })
  data: Record<string, any>; // JSON data received

  @Prop({ default: Date.now })
  receivedAt: Date; // Timestamp of when the data was received
}

export const WebhookSchema = SchemaFactory.createForClass(Webhook);
