export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  constructor(content: string) {
    if (content.length < 5 || content.length > 240) {
      throw new Error(
        'The length of the content must be between 5 and 240 characters.',
      );
    }
    this.content = content;
  }
}
