/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { persist } from 'zustand/middleware';
import create from 'zustand';

import { Storeable } from '../types/store';
import { MessageBoxable } from 'lib/types/message';
import { commands } from 'lib/constants/commands';
import get from 'zustand/middleware/get';

import { useLayoutEffect } from 'react';
import createContext from 'zustand/context';

let store: any;

const getDefaultInitialState = () => ({
  isLoading: false,
  initialCodeInstruction: true,
  userInputRequest: '',
  appRequests: [
    {
      message: 'Hey man how are u doin?',
      isFromUser: true,
    },
    {
      message: 'I am good. You?',
      isFromUser: false,
    },
  ],
  command: commands.GENERATE_CODE,
});

const zustandContext = createContext();

export const Provider = zustandContext.Provider;
export const useStore = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
  return create<any>(
    persist<any>(
      (set, get) => ({
        isLoading: false,
        initialCodeInstruction: true,
        userInputRequest: '',
        appRequests: [
          {
            message: 'Hey man how are u doin?',
            isFromUser: true,
          },
          {
            message: 'I am good. You?',
            isFromUser: false,
          },
        ],
        command: commands.GENERATE_CODE,
        ...preloadedState,

        setUserInputRequest: (userInputRequest: string) => {
          set((state: Storeable) => ({
            userInputRequest,
            initialCodeInstruction: false,
          }));
        },

        setAppRequests: (appRequests: MessageBoxable) => {
          set((state: Storeable) => ({
            appRequests: [...get().appRequests, appRequests],
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
};

export function useCreateStore(serverInitialState: any) {
  if (typeof window === 'undefined') {
    return () => initializeStore(serverInitialState);
  }
  const isReusingStore = Boolean(store);
  store = store ?? initializeStore(serverInitialState);
  useLayoutEffect(() => {
    if (serverInitialState && isReusingStore) {
      store.setState(
        {
          ...store.getState(),
          ...serverInitialState,
        },
        true
      );
    }
  });

  return () => store;
}

// export const useStore = create<any>(
//   persist<any>(
//     (set, get) => ({
//       isFromUser: false,
//       isLoading: false,
//       message: '',
//       initialCodeInstruction: true,
//       userInputRequest: '',
//       appRequests: [],
//       command: commands.GENERATE_CODE,
//       setUserInputRequest: (userInputRequest: string) => {
//         set((state: Storeable) => ({
//           userInputRequest,
//           initialCodeInstruction: false,
//         }));
//       },

//       setAppRequests: (appRequests: MessageBoxable[]) => {
//         set((state: Storeable) => ({
//           appRequests,
//         }));
//       },

//       setIsLoading: (isLoading: boolean) => {
//         set((state: Storeable) => ({
//           isLoading,
//         }));
//       },
//     }),
//     { name: 'warvil' }
//   )
// );
