import { MessageBoxable } from './message';
export interface CommandBoxable {
  ref: any;
  breakpoint: string;
}

export interface Playgroundable {
  messageBoxContainerRef: any;
  inputBoxRef: any;
  loading: boolean;
  userInput: string;
  appRequests: MessageBoxable[];
  submitRequest: (e: { preventDefault: () => void }) => void;
  getUserInput: (event: any) => void;
}
