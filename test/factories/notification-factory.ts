import { Content } from '../../src/application/entities/content';
import {
  Notification,
  NotificationProps,
} from '../../src/application/entities/notification';

type Override = Partial<NotificationProps>;

export function MakeNotification(override: Override = {}) {
  return new Notification({
    category: 'Social',
    content: new Content('Você tem duas mensagens.'),
    recipientId: 'example1',
    ...override,
  });
}
