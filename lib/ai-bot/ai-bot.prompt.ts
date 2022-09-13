import { Promptable } from '../types/ai-bot';

export class JsChatBot implements Promptable {
  constructor() {}

  private customRequest(userRequest: string): string {
    let userQuestion =
      userRequest[0].toLocaleUpperCase() +
      userRequest.slice(1).toLocaleLowerCase();

    return userQuestion;
  }

  public generatePrompt(_userRequest: string): string {
    return `
        You: What is Javascript?
        Warvil Bot: JavaScript is a client-side scripting language as well as a server-side scripting language.
        You: What is an array in Javascript?
        Warvil Bot: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
        You: ${this.customRequest(_userRequest)}
        Warvil Bot:
    `;
  }
}
