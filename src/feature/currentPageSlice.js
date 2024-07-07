import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value += 1;
    },
    prePage: (state) => {
      if (1 < state.value) {
        state.value -= 1;
      }
    },
  },
});

export const { nextPage, prePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
