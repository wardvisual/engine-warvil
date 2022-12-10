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
      codeInitialInstruction: '',
      userInputRequest: '',
      appRequests: [],
      setCodeInitialInstruction: (codeInitialInstruction: string) => {
        set((state: Storeable) => ({
          codeInitialInstruction,
        }));
      },

      setUserInputRequest: (userInput: string) => {
        set((state: Storeable) => ({
          userInput,
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
