import { Configuration, OpenAIApi } from 'openai';

import { AIResponse, Promptable } from './openai.types';
import { Prompt } from './openai.prompt';
import { commands } from '../../../../lib/constants/commands';

class OpenAIClient {
  private configuration: Configuration;
  private openai: OpenAIApi;
  private defaultModel: string;
  private prompt: Promptable;
  public response!: AIResponse;
  private promptConfig: any;

  constructor() {
    this.defaultModel = 'text-davinci-003';
    this.prompt = new Prompt();
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(this.configuration);
  }

  private getCompletion(command: string, userRequest: string[]) {
    switch (command) {
      case commands.BASIC_QUESTION:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0,
          max_tokens: 100,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
          stop: ['\n'],
        };
      case commands.GENERATE_CODE:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0.86,
          max_tokens: 1896,
          top_p: 1,
          frequency_penalty: 0.21,
          presence_penalty: 0.11,
        };
      case commands.GRAMMAR_CORRECTION:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        };
    }
  }

  public async createCompletion(command: string, userRequest: string[]) {
    this.getCompletion(command, userRequest);

    try {
      const completion = await this.openai.createCompletion(this.promptConfig);

      if (completion.data.choices?.length) {
        this.response = {
          isSuccess: true,
          message: completion.data.choices[0].text || '',
        };
      }
    } catch (error: any) {
      console.log({ server: error.message });
      const msg = {
        preffered: "I'm sorry, I don't understand your question!",
        expiredToken: `I'm sorry, but the service is currently not available due to development work. Please check back later or contact wardvisual, the developer of this app, for further assistance.`,
      };

      this.response = {
        isSuccess: false,
        message: msg.expiredToken,
      };
    }

    return this.response;
  }
}

export default OpenAIClient;
