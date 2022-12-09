export interface Promptable {
  trainPrompt(command: string, request: string): string;
}
