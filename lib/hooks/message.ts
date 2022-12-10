import { MessageBoxable, MessageStoreable } from 'lib/types/message';
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useMessageStore = create<MessageStoreable>()(
  devtools(
    persist(
      (set) => ({
        requests: [],
        saveRequest: (request: MessageBoxable[]) => {
          set((state) => ({ requests: request }));
        },
      }),
      {
        name: 'warvil',
      }
    )
  )
);

export default useMessageStore;
