import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { NotificationController } from './kafka/controllers/notification.controller';
import { SendNotification } from './../../application/use-cases/send-notification';
import { DatabaseModule } from './../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
})
export class MessaginModule {}
