import { configureStore } from "@reduxjs/toolkit";
import currentPageReducer from "./feature/currentPageSlice";
import dataReducer from "./feature/dataSlice";

export const store = configureStore({
  reducer: {
    currentPage: currentPageReducer,
    data: dataReducer,
  },
});
