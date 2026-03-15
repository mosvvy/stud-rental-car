import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchFilters {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}

interface SearchStore {
  filters: SearchFilters;
  setFilters: (values: SearchFilters) => void;
  resetFilters: () => void;
}

export const useSearchStore = create<SearchStore>()(
  persist(
    (set) => ({
      filters: {},
      setFilters: (values) => set({ filters: values }),
      resetFilters: () => set({ filters: {} }),
    }),
    {
      name: "search-filters",
    },
  ),
);
