import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendNotification } from './../../../../application/use-cases/send-notification';
import { KafkaMessageContent } from './../../../http/dtos/kafka-message-content';

@Controller()
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}
  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { category, content, recipientId }: KafkaMessageContent,
  ) {
    await this.sendNotification.execute({ category, content, recipientId });
  }
}
