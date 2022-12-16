import { Configuration, OpenAIApi } from 'openai';

import { AIResponse, Promptable } from './openai.types';
import { Prompt } from './openai.prompt';

class OpenAIClient {
  private configuration: Configuration;
  private openai: OpenAIApi;
  private defaultModel: string;
  private prompt: Promptable;
  public response!: AIResponse;

  constructor() {
    this.defaultModel = 'text-davinci-003';
    this.prompt = new Prompt();
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  public async createCompletion(command: string, userRequest: string[]) {
    try {
      const completion = await this.openai.createCompletion({
        model: this.defaultModel,
        prompt: this.prompt.trainPrompt(command, userRequest),
        temperature: 0.86,
        max_tokens: 1896,
        top_p: 1,
        frequency_penalty: 0.21,
        presence_penalty: 0.11,
      });

      if (completion.data.choices?.length) {
        this.response = {
          isSuccess: true,
          message: completion.data.choices[0].text || '',
        };
      }
    } catch (error) {
      this.response = {
        isSuccess: false,
        message: "I'm sorry, I don't understand your question!",
      };
    }

    return this.response;
  }
}

export default OpenAIClient;
