import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { idbStorage } from "@/utils/persist";

export interface CacheStoreState {
  celebrity: OneTab.Celebrity | null;

  updateCache: (data: Partial<CacheStoreState>) => void;
}

export const useCacheStore = create<CacheStoreState>()(
  persist(
    (set) => ({
      celebrity: null,
      updateCache: (data) => set(data),
    }),
    {
      name: "onetab-cache", // unique name
      storage: createJSONStorage(() => idbStorage),
    },
  ),
);
