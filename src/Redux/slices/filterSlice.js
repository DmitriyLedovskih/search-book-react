import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortType: "relevance",
  category: "all",
};

export const filterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setSortType, setCategory } = filterSlice.actions;

export default filterSlice.reducer;
