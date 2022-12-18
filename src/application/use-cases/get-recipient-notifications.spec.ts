import { MakeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Count notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example1' }),
        expect.objectContaining({ recipientId: 'example1' }),
      ]),
    );
  });
});
