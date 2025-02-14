import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useClientStoreAuth = create(
  persist(
    (set) => ({
      clientData: null,
      setClientData: (clientData) => set({ clientData }),
      reset: () => set({ clientData: null }),
    }),
    {
      name: "user-auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
