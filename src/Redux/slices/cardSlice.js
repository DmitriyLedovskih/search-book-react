import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  item: {},
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setCardItem(state, action) {
      state.item = action.payload;
      localStorage.setItem("item", JSON.stringify(action.payload));
    },
  },
});

export const { setCardItem, setItems } = cardSlice.actions;

export default cardSlice.reducer;
