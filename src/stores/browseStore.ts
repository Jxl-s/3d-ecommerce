import { create } from "zustand";

export enum SortBy {
    Name,
    Price,
    Rating,
}

export enum SortOrder {
    Asc,
    Desc,
}

interface BrowseState {
    searchQuery: string;
    setSearchQuery: (query: string) => void;

    sortBy: SortBy;
    setSortBy: (sortBy: SortBy) => void;
    sortOrder: SortOrder;
    setSortOrder: (sortOrder: SortOrder) => void;

    useStarFilters: boolean;
    setUseStarFilters: (use: boolean) => void;

    starFilters: number[];
    setStarFilters: (filters: number[]) => void;

    usePriceFilters: boolean;
    setUsePriceFilters: (use: boolean) => void;

    priceFilters: {
        from: number;
        to: number;
    };
    setPriceFilters: (from: number, to: number) => void;
}

export const useBrowseStore = create<BrowseState>((set) => ({
    searchQuery: "",
    setSearchQuery: (query: string) => set({ searchQuery: query }),

    sortBy: SortBy.Name,
    setSortBy: (sortBy: SortBy) => set({ sortBy }),
    sortOrder: SortOrder.Asc,
    setSortOrder: (sortOrder: SortOrder) => set({ sortOrder }),

    useStarFilters: false,
    setUseStarFilters: (use: boolean) => set({ useStarFilters: use }),
    starFilters: [],
    setStarFilters: (filters: number[]) => set({ starFilters: filters }),

    usePriceFilters: false,
    setUsePriceFilters: (use: boolean) => set({ usePriceFilters: use }),

    priceFilters: {
        from: 0,
        to: 0,
    },
    setPriceFilters: (from: number, to: number) =>
        set({ priceFilters: { from, to } }),
}));
