import { Configuration, OpenAIApi } from 'openai';

import { AIResponse, Promptable } from 'lib/api/openai/openai.types';
import { Prompt } from 'lib/api/openai/openai.prompt';
import { commands } from 'lib/constants/constant.command';

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
        };
        break;
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
        break;
      case commands.GENERATE_THESIS_TITLE:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0.86,
          max_tokens: 1896,
          top_p: 1,
          frequency_penalty: 0.21,
          presence_penalty: 0.11,
        };
        break;
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
        break;
      case commands.PARAPHRASE:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        };
        break;
      case commands.SUMMARIZE_FOR_A_STUDENT_GRADE:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0.7,
          max_tokens: 64,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        };
        break;
      case commands.ENGLISH_TO_OTHER_LANGUAGE:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0.3,
          max_tokens: 100,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        };
        break;
      case commands.EXPLAIN_PROGRAMMING_CODE:
        this.promptConfig = {
          model: 'code-davinci-002',
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0.7,
          max_tokens: 128,
          top_p: 0.9,
          frequency_penalty: 1.0,
          presence_penalty: 1.0,
          stop: ['"""'] /* @prettier-ignore  */,
        };
        break;
      case commands.EVALUATE_A_MATHEMATICAL_EXPRESSION:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0.5,
          max_tokens: 128,
          top_p: 1.0,
          frequency_penalty: 1.0,
          presence_penalty: 1.0,
        };
        break;
      case commands.CREATE_STUDY_NOTES:
        this.promptConfig = {
          model: this.defaultModel,
          prompt: this.prompt.trainPrompt(command, userRequest),
          temperature: 0,
          max_tokens: 64,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        };
        break;
    }
  }

  public async createCompletion(command: string, userRequest: string[]) {
    console.log({ command, userRequest });

    try {
      this.getCompletion(command, userRequest);

      const completion = await this.openai.createCompletion(this.promptConfig);

      if (completion.data.choices?.length) {
        this.response = {
          isSuccess: true,
          message: completion.data.choices[0].text || '',
        };
      }
    } catch (error: any) {
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
