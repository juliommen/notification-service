import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { MakeNotification } from '../../../test/factories/notification-factory';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(
      inMemoryNotificationsRepository,
    );

    const notification = MakeNotification();

    await inMemoryNotificationsRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });
    expect(inMemoryNotificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(
      inMemoryNotificationsRepository,
    );

    expect(() =>
      cancelNotification.execute({ notificationId: 'fake-id' }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
