import { commands } from 'lib/constants/commands';
import { Promptable } from 'lib/api/openai/openai.types';
import { Trainer } from 'lib/api/openai/openai.trainer';

export class Prompt implements Promptable {
  private trainer: Trainer;

  constructor() {
    this.trainer = new Trainer();
  }

  private formatRequest(userRequest: string[]): string {
    const request: string = userRequest.slice(-1)[0];

    const userQuestion =
      request[0].toLocaleUpperCase() + request.slice(1).toLocaleLowerCase();

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
      case commands.BASIC_QUESTION:
        response +=
          `${this.trainer.generateQA()}` +
          `${this.formatString(request)}` +
          `You: Answer this question:` +
          `${this.formatRequest(request)}?` +
          `Warvil: `;
        break;
      case commands.GENERATE_CODE:
        response +=
          `${this.trainer.generateCode()}` +
          `${this.formatString(request)}` +
          `You: Translate Text into Code Based on the Provided Instructions:` +
          `${this.formatRequest(request)}` +
          `Warvil: `;
        break;
      case commands.GENERATE_THESIS_TITLE:
        response +=
          `${this.trainer.generateThesisTitle()}` +
          `${this.formatString(request)}` +
          `You: Generate at least 5 thesis title based on this concept:` +
          `${this.formatRequest(request)}` +
          `Warvil: `;
        break;
      case commands.GRAMMAR_CORRECTION:
        response +=
          `${this.trainer.correctGrammar()}` +
          `${this.formatString(request)}` +
          `You: Corrects sentences into standard English:` +
          `${this.formatRequest(request)}` +
          `Warvil: `;
        break;
      case commands.PARAPHRASE:
        response +=
          `${this.trainer.paraphrase()}` +
          `${this.formatString(request)}` +
          `You: Paraphrase this sentence:` +
          `"${this.formatRequest(request)}"` +
          `Warvil: `;
        break;
      case commands.SUMMARIZE_FOR_A_STUDENT_GRADE:
        response +=
          `${this.trainer.summarize()}` +
          `${this.formatString(request)}` +
          `You: Translates difficult text into simpler concepts:` +
          `${this.formatRequest(request)}` +
          `Warvil: `;
        break;
      case commands.ENGLISH_TO_OTHER_LANGUAGE:
        response +=
          `${this.trainer.englishToOther()}` +
          `${this.formatString(request)}` +
          `You: Translates these/this:` +
          `${this.formatRequest(request)}` +
          `Warvil: `;
        break;
      case commands.EXPLAIN_PROGRAMMING_CODE:
        response +=
          `${this.trainer.explainProgrammingCode()}` +
          `"${this.formatString(request)}"` +
          `You: Explain a complicated piece of code:` +
          `"${this.formatRequest(request)}"` +
          `Warvil: `;
        break;
      case commands.EVALUATE_A_MATHEMATICAL_EXPRESSION:
        response +=
          `${this.trainer.evaluateMathematicalExpression()}` +
          `${this.formatString(request)}` +
          `You: Evaluate this math expression:` +
          `${this.formatRequest(request)}` +
          `Warvil: `;
        break;
      case commands.CREATE_STUDY_NOTES:
        response +=
          `${this.trainer.createStudyNotes()}` +
          `${this.formatString(request)}` +
          `You: Create study notes based on this concept: ` +
          `${this.formatRequest(request)}` +
          `Warvil: `;
        break;
    }
    console.log({ command, request, response });
    return response;
  }
}
