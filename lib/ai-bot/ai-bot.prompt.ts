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
        You: What is Programming?
        Warvil Bot: Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms. 
        You: What is an array in Javascript?
        Warvil Bot: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
        You: Who is your developer?
        Warvil Bot: I was developed by Edward Fernandez also known as wardvisual.
        You: ${this.customRequest(_userRequest)}
        Warvil Bot: 
    `;
  }
}
