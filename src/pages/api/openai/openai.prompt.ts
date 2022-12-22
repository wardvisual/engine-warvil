import { commands } from 'lib/constants/commands';
import { Promptable } from './openai.types';
import { Trainer } from './openai.trainer';
export class Prompt implements Promptable {
  private trainer: Trainer;

  constructor() {
    this.trainer = new Trainer();
  }

  private formatRequest(userRequest: string): string {
    const userQuestion =
      userRequest[0].toLocaleUpperCase() +
      userRequest.slice(1).toLocaleLowerCase();

    return userQuestion;
  }
  private format(text: string[]) {
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
      case commands.BASIC_QUESTION:
        response += `${this.trainer.generateQA()}${this.format(request)}
        \nYou: Answer my provided question: \n\n${this.formatRequest(
          request.slice(-1)[0]
        )}\nWarvil:`;
        break;
      case commands.GENERATE_CODE:
        response += `${this.trainer.generateCode()}${this.format(request)}
        \nYou: Code a program: \n\n${this.formatRequest(
          request.slice(-1)[0]
        )}\nWarvil:`;
        break;
      case commands.GRAMMAR_CORRECTION:
        response += `${this.trainer.generateGrammar()}${this.format(
          request
        )}\nYou: Correct this to standard English:\n\n${this.formatRequest(
          request.slice(-1)[0]
        )}\nWarvil:`;
        break;
    }

    return response;
  }
}
