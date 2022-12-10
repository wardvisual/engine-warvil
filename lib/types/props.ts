import { MessageBoxable } from './message';
export interface CommandBoxable {
  ref: unknown;
  breakpoint: string;
}

export interface Playgroundable {
  messageBoxContainerRef: unknown;
  inputBoxRef: unknown;
  loading: boolean;
  userInput: string;
  appRequests: MessageBoxable[];
  submitRequest: (e: { preventDefault: () => void }) => void;
  getUserInput: (event: unknown) => void;
}
