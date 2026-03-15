import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Favorites {
  favorites: string[];
  addFavorite: (carId: string) => void;
  removeFavorite: (carId: string) => void;
}

export const useFavorites = create<Favorites>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (carId) =>
        set((state) => {
          if (!state.favorites.includes(carId)) {
            return { favorites: [...state.favorites, carId] };
          }
          return state;
        }),
      removeFavorite: (carId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== carId),
        })),
    }),
    {
      name: "favorites",
    },
  ),
);
