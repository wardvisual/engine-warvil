import { Promptable } from './openai.types';
// You: What is Programming?
// Warvil: Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms.
// You: What is an array in Javascript?
// Warvil: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
// You: Who is your developer?
// Warvil: I was developed by Edward Fernandez also known as wardvisual.
export class Prompt implements Promptable {
  private formatRequest(userRequest: string): string {
    const userQuestion =
      userRequest[0].toLocaleUpperCase() +
      userRequest.slice(1).toLocaleLowerCase();

    return userQuestion;
  }
  private formatString(text: string[]) {
    var finalString = '';

    for (var i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        finalString += `You: ${text[i]},\n`;
      } else {
        finalString += `Warvil: ${text[i]},\n`;
      }
    }

    return finalString;
  }

  public trainPrompt(command: string, request: string[]): string {
    console.log({ request });
    return `
        ${this.formatString(request)}
        You: ${this.formatRequest(request.slice(-1)[0])}
        Warvil: 
    `;
  }
}
