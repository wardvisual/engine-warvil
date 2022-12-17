export interface Promptable {
  generatePrompt: (userRequest: string) => string;
}

export interface MessageBoxable {
  isFromUser: boolean;
  message: string;
}

export interface MessageStoreable {
  requests: MessageBoxable[];
  saveRequest: (request: MessageBoxable[]) => void;
}
