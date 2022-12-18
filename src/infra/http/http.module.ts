import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from 'src/application/use-cases/cancel-notification';
import { ReadNotification } from 'src/application/use-cases/read-notification';
import { UnreadNotification } from 'src/application/use-cases/unread-notification';
import { GetRecipientNotifications } from 'src/application/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from 'src/application/use-cases/count-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
  ],
})
export class HttpModule {}
