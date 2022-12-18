import { ReactNode } from 'react';
import { MessageBoxable } from './message';
import { Event } from 'lib/types/tags';
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
  getUserInput: (event: Event) => void;
}

export interface Modalable {
  children: ReactNode;
  display: boolean;
  handleOnClose: () => void;
}
