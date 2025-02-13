import { create } from 'zustand';
import { firebaseAuth } from 'app';
import type { User } from 'firebase/auth';

interface AuthState {
  user: User | null;
  loading: boolean;
  initialized: boolean;
  signOut: () => Promise<void>;
  set:User  (user: User | null) => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  initialized: false,
  set:User  (user) => set({ user, loading: false }),
  signOut: async () => {
    await firebaseAuth.signOut();
    set({ user: null });
  },
  initialize: async () => {
    // Initialize Firebase auth listener
  },
}));