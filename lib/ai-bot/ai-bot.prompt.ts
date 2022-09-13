import { Promptable } from "../types/ai-bot";

export class JsChatBot implements Promptable {
  constructor() {}

  private customRequest(userRequest: string): string {
    let userQuestion = userRequest.trim();

    userQuestion =
      userQuestion[0].toLocaleLowerCase() +
      userQuestion.slice(1).toLocaleUpperCase;

    return userQuestion;
  }

  public generatePrompt(userRequest: string): string {
    return `
        You: What is Javascript?
        Javascript ChatBot: JavaScript is a client-side scripting language as well as a server-side scripting language.
        You: What is an array in Javascript?
        Javascript ChatBot: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
        You: ${this.customRequest(userRequest)} 
        Javascript ChatBot: 
    `;
  }
}
