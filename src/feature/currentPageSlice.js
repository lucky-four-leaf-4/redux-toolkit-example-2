import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    nextPage: (state) => {
      console.log(`state.value ${state.value}`);
      state.value += 1;
      console.log(`after state.value ${state.value}`);
    },
    prePage: (state) => {
      if (0 < state.value) {
        state.value -= 1;
      }
    },
  },
});

export const { nextPage, prePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
