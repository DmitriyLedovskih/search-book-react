import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";
import filterReducer from "./slices/filterSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
    card: cardReducer,
  },
});
