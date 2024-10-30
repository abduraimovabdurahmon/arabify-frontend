import {create} from 'zustand';

export type Store = {
    token : string | null;
    setToken: (token: string | null) => void;
    role : string | null;
    setRole: (role: string) => void;
    theme: string;
    setTheme: (theme: string) => void;
    language: string;
    setLanguage: (language: string) => void;
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
    clearStore: () => void;
}


export const useStore = create<Store>((set) => ({
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    setToken: (token) => set({ token }),
    role: typeof window !== 'undefined' ? localStorage.getItem('role') : null,
    setRole: (role) => set({ role }),
    theme: 'light',
    setTheme: (theme) => set({ theme }),
    language: 'uz',
    setLanguage: (language) => set({ language }),
    isAuth: false,
    setIsAuth: (isAuth) => set({ isAuth }),
    clearStore: () => set({ token: null, role: null, isAuth: false }),
}));