export interface Promptable {
  generatePrompt: (userRequest: string) => string;
}
