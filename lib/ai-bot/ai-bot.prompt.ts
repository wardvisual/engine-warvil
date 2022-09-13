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
        Warvil Bot: JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. 
        You: What is an array in Javascript?
        Warvil Bot: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
        You: Who is your developer?
        Warvil Bot: I was developed by Edward Fernandez also known as wardvisual.
        You: ${this.customRequest(_userRequest)}
        Warvil Bot:
    `;
  }
}
