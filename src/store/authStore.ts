'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        isLoading: true,
        setUser: (user) => set({ user, isAuthenticated: !!user }),
        setIsAuthenticated: (value) => set({ isAuthenticated: value }),
        setIsLoading: (value) => set({ isLoading: value }),
        logout: () => set({ user: null, isAuthenticated: false }),
      }),
      {
        name: 'auth-store',
      }
    )
  )
);
