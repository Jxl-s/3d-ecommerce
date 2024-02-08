import { create } from "zustand";

interface LayoutState {
    sideBarOpened: boolean;
    setSideBarOpened: (opened: boolean) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
    sideBarOpened: true,
    setSideBarOpened: (opened: boolean) => set({ sideBarOpened: opened }),
}));
