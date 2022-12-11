import { MessageBoxable } from './message';

export interface Storeable {
  setUserInputRequest?: (text: string) => void;
  setAppRequests?: (text: MessageBoxable[]) => void;
  isFromUser: boolean;
  message: string;
  initialCodeInstruction: boolean;
  userInputRequest: string;
  appRequests: MessageBoxable[];
  isLoading: boolean;
}
