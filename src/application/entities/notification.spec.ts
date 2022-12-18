import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      recipientId: 'example-recipient-id',
      content: new Content('Você ganhou dez reais.'),
    });

    expect(notification).toBeTruthy();
  });
});
