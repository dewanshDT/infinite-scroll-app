import create from 'zustand';

const useStore = create(set => ({
    URL: "https://api.unsplash.com/search/photos?page=1&query=office&client_id=MrsptAEkuNtiOj9sakWFD9PmsE7roU5qo4Zub6CQgSk&client_secret=F19zKmUGoRQy1QY-FfEodfvh6jKPORIaDZLM7GHL_Nw",
    rawJSON: [],
    addJSON: (JSON) => set(state => ({rawJSON: [...state.rawJSON, JSON.map(data => data)]})),
    setJSON: (JSON) => set(state => ({rawJSON: JSON}))
}));

export default useStore;