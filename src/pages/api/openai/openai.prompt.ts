import { Promptable } from './openai.types';
import { Helper } from './openai.helper';

export class Prompt implements Promptable {
  // private helper: Helper;

  // constructor() {
  //   this.helper = new Helper();
  // }

  // public trainPrompt(command: string, request: string): string {
  //   let response: string = '';

  //   switch (command) {
  //     case 'BASIC_QUESTION':
  //       response = this.helper.basicQuestion(request);
  //   }

  //   return response;
  // }
  private formatRequest(userRequest: string): string {
    const userQuestion =
      userRequest[0].toLocaleUpperCase() +
      userRequest.slice(1).toLocaleLowerCase();

    return userQuestion;
  }

  public trainPrompt(command: string, request: string): string {
    return `
        You: What is Programming?
        Warvil Bot: Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms. 
        You: What is an array in Javascript?
        Warvil Bot: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
        You: Who is your developer?
        Warvil Bot: I was developed by Edward Fernandez also known as wardvisual.
        You: ${this.formatRequest(request)}
        Warvil Bot: 
    `;
  }
}
