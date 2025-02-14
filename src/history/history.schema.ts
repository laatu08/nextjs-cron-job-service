import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type HistoryDocument = History & Document;

@Schema({ timestamps: true })
export class History {
  @Prop({ type: Types.ObjectId, ref: 'CronJob', required: true })
  cronJobId: Types.ObjectId; // Reference to the cron job

  @Prop({ required: true })
  executedAt: Date; // Timestamp of execution

  @Prop({ type: Object, required: true })
  response: Record<string, any>; // Response data from API call

  @Prop({ default: 'success' })
  status: string; // Status of execution (success, failed, etc.)
}

export const HistorySchema = SchemaFactory.createForClass(History);
