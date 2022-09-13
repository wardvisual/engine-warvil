import { Promptable } from "lib/types/ai-bot";
import { Configuration, CreateCompletionRequest, OpenAIApi } from "openai";
import { JsChatBot } from "./ai-bot.prompt";

export class AiBot {
  private model: CreateCompletionRequest["model"] = "text-davinci-002";
  private configuration;
  private openai;
  private prompt: Promptable;

  constructor(PromptStrategy: any = JsChatBot) {
    this.prompt = new PromptStrategy();
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  public async createCompletion(userRequest: string) {
    try {
      const completion = await this.openai.createCompletion({
        model: this.model,
        prompt: this.prompt.generatePrompt(userRequest),
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      });

      return completion.data.choices[0].text;
    } catch (error) {
      return "i don't understand your question";
    }
  }
}
