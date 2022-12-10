import { commands } from 'lib/constants/commands';
import { Promptable } from './openai.types';
export class Prompt implements Promptable {
  private formatRequest(userRequest: string): string {
    const userQuestion =
      userRequest[0].toLocaleUpperCase() +
      userRequest.slice(1).toLocaleLowerCase();

    return userQuestion;
  }
  private formatString(text: string[]) {
    let finalString = '';

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        finalString += `You: ${text[i]}`;
      } else {
        finalString += `Warvil: ${text[i]}`;
      }
    }

    return finalString;
  }

  public trainPrompt(command: string, request: string[]): string {
    let response = ``;

    switch (command) {
      case commands.GENERATE_CODE:
        response = `${this.formatString(request)}\nYou: ${this.formatRequest(
          request.slice(-1)[0]
        )}\nWarvil:`;
        break;
      case commands.BASIC_QUESTION:
        response = ``;
        break;
    }

    return response;
  }
}
