import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification';
import { NotificationsRespository } from '../repositories/notifications-repository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRespository: NotificationsRespository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRespository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
