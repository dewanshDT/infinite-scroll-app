import create from "zustand";

const useStore = create((set) => ({
  rawJSON: [],
  pageNumber: 1,
  loading: false,
  currentItem: {},
  addJSON: (JSON) =>set((state) => ({ rawJSON: [...state.rawJSON, JSON.map((data) => data)] })),
  setJSON: (JSON) => set((state) => ({ rawJSON: JSON })),
  setCurrentItem: (item) => set((state) => ({ currentItem: item })),
  setPageNumber: (number) => set((state) => ({ pageNumber: number })),
  setLoading: (bool) => set((state) => ({ loading: bool })),
}));

export default useStore;
