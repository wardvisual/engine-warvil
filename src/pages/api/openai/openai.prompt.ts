import { Promptable } from './openai.types';
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
        finalString += `You: ${text[i]}`;
      } else {
        finalString += `Warvil: ${text[i]}`;
      }
    }

    return finalString;
  }

  public trainPrompt(command: string, request: string[]): string {
    console.log({ request });
    return `${this.formatString(request)}\nYou: ${this.formatRequest(
      request.slice(-1)[0]
    )}\nWarvil:`;
  }
}
