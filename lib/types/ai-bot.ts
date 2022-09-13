export interface Promptable {
  generatePrompt: (req, string) => string;
}
