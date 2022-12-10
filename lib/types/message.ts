export interface Promptable {
  generatePrompt: (userRequest: string) => string;
}

export interface MessageBoxable {
  isFromUser: boolean;
  message: string;
  loading?: boolean;
}

export interface MessageStoreable {
  requests: MessageBoxable[];
  saveRequest: (request: MessageBoxable[]) => void;
}
