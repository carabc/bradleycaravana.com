import { create } from "zustand";

const useStore = create((set) => ({
  repos: [],
  setRepos: (reposArr) => set((state) => ({ repos: reposArr })),
  isLoading: false,
  setIsLoading: (loading) => set((state) => ({ isLoading: loading })),
}));

export default useStore;
