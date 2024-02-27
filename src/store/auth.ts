import { create } from 'zustand';

interface State {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const useAuthStore = create<State>((set) => ({
    isLoggedIn: false,
    login: () => {
        set({ isLoggedIn: true });
    },
    logout: () => {
        set({ isLoggedIn: false });
    },
}));

export default useAuthStore;
