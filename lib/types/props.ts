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
  initialCodeInstruction: boolean;
  loading: boolean;
  userInput: string;
  appRequests: MessageBoxable[];
  submitRequest: (e: { preventDefault: () => void }) => void;
  getUserInput: (event: string | Event) => void;
  cleanUpConvo: () => void;
}

export interface Modalable {
  children: ReactNode;
  title: string;
  display: boolean;
  handleOnClose: () => void;
  customStyle?: {
    width: string;
  };
}
