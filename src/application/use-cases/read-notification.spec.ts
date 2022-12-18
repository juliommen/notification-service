import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { MakeNotification } from '../../../test/factories/notification-factory';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(
      inMemoryNotificationsRepository,
    );

    const notification = MakeNotification();

    await inMemoryNotificationsRepository.create(notification);

    await readNotification.execute({ notificationId: notification.id });
    expect(inMemoryNotificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(
      inMemoryNotificationsRepository,
    );

    expect(() =>
      readNotification.execute({ notificationId: 'fake-id' }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
