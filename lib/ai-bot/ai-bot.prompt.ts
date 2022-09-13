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
    const prompt = `
        You: What is Javascript?
        Javascript ChatBot: JavaScript is a client-side scripting language as well as a server-side scripting language.
        You: ${this.customRequest(userRequest)} 
        Javascript ChatBot: 
    `;

    return prompt;
  }
}
