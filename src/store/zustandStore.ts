import { create, SetState } from 'zustand';

interface IStore {
  commentText: string;
  updateComment: (newComment: string) => void;
}

const useStore = create<IStore>((set: SetState<IStore>) => ({
  commentText: '',
  updateComment: (newComment: string) => set({ commentText: newComment }),
}));

export { useStore };
