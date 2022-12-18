import { Content } from './content';

describe('Notification content creation', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você receber uma solicitação de amizade.');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with lesse than 5 characters', () => {
    expect(() => new Content('olá')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
