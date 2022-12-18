import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const inMemoryNotificationsRepository =
      new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(
      inMemoryNotificationsRepository,
    );
    const { notification } = await sendNotification.execute({
      category: 'social',
      recipientId: 'example-recipient-id',
      content: 'Você ganhou dez reais.',
    });
    expect(inMemoryNotificationsRepository.notifications).toHaveLength(1);
    expect(inMemoryNotificationsRepository.notifications[0]).toEqual(
      notification,
    );
  });
});
