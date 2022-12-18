import { MakeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      inMemoryNotificationsRepository,
    );

    await inMemoryNotificationsRepository.create(
      MakeNotification({ recipientId: 'example1' }),
    );

    await inMemoryNotificationsRepository.create(
      MakeNotification({ recipientId: 'example1' }),
    );

    await inMemoryNotificationsRepository.create(
      MakeNotification({ recipientId: 'example2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example1',
    });

    expect(count).toEqual(2);
  });
});
