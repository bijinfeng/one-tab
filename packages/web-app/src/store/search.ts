import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import { searchEngineMap } from "@/constants/search-engine"
import { idbStorage } from "@/utils/persist"

export interface SearchStoreState {
  currentId: string
  currentIdList: string[]
  defaultList: typeof searchEngineMap
  setCurrentId: (id: string) => void
}

export const useSearchStore = create<SearchStoreState>()(
  persist(
    set => ({
      currentId: "0",
      currentIdList: ["0", "2", "1"],
      defaultList: searchEngineMap,
      setCurrentId: (id: string) => set({ currentId: id }),
    }),
    {
      name: "onetab-search", // unique name
      storage: createJSONStorage(() => idbStorage),
    },
  ),
)
