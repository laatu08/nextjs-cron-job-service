import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CronJobModule } from './cron-job/cron-job.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { WebhookModule } from './webhook/webhook.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://partha2002borah:S0wJJQjonNpllJUi@cluster0.6lnbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    CronJobModule,
    WebhookModule,
    HistoryModule,
    ThrottlerModule.forRoot([{
      ttl:60000,
      limit:10,
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
