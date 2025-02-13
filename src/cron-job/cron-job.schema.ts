import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CronJobDocument = CronJob & Document;

@Schema()
export class CronJob {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string; 

  @Prop({ required: true })
  apiKey: string;

  @Prop({ required: true })
  schedule: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ default: true })
  isActive: boolean;
}

export const CronJobSchema = SchemaFactory.createForClass(CronJob);
