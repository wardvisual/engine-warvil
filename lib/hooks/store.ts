/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { persist } from 'zustand/middleware';
import create from 'zustand';
import { Storeable } from '../types/store';
import { MessageBoxable } from 'lib/types/message';

export const useStore = create<any>(
  persist<any>(
    (set, get) => ({
      isFromUser: false,
      isLoading: false,
      message: '',
      initialCodeInstruction: true,
      userInputRequest: '',
      appRequests: [],
      setUserInputRequest: (userInputRequest: string) => {
        set((state: Storeable) => ({
          userInputRequest,
          initialCodeInstruction: false,
        }));
      },

      setAppRequests: (appRequests: MessageBoxable[]) => {
        set((state: Storeable) => ({
          appRequests,
        }));
      },

      setIsLoading: (isLoading: boolean) => {
        set((state: Storeable) => ({
          isLoading,
        }));
      },
    }),
    { name: 'warvil' }
  )
);
