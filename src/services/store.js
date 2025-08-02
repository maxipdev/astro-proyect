import { create } from "zustand";

export const useModalStore = create((set) => ({
  imageModal: false,
  selectedImg: null,
  selectedName: '',
  openImageModal: (img, name) =>
    set({ imageModal: true, selectedImg: img, selectedName: name }),
  closeImageModal: () => set({ imageModal: false, selectedImg: null, selectedName: '' })
}))