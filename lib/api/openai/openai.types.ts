export interface Promptable {
  trainPrompt(command: string, request: string[]): string;
}

export interface AIResponse {
  message: string;
  isSuccess: boolean;
}
