import { Injectable } from '@nestjs/common';
import { NotificationsRespository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRespository: NotificationsRespository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRespository.findById(
      notificationId,
    );
    if (!notification) {
      throw new NotificationNotFound();
    }
    notification.cancel();
    await this.notificationsRespository.save(notification);
  }
}
