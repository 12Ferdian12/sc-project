import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
}

const initialState: ModalState = {
  isOpen: false,
  content: null,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, payload) => {
      state.content = payload.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
