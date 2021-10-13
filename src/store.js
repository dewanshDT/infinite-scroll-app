import create from "zustand";

const useStore = create((set) => ({
  rawJSON: [],
  currentItem: {},
  pageNumber: 1,
  loading: false,
  scrollPosition: 0,
  addJSON: (JSON) => set((state) => ({ rawJSON: [...state.rawJSON, JSON.map((data) => data)] })),
  setJSON: (JSON) => set((state) => ({ rawJSON: JSON })),
  setCurrentItem: (item) => set((state) => ({ currentItem: item })),
  setPageNumber: (number) => set((state) => ({ pageNumber: number })),
  setLoading: (bool) => set((state) => ({ loading: bool })),
  setScrollPosition: (num) => set((state) => ({ scrollPosition: num })),
}));

export default useStore;
