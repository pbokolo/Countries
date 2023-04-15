import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "countries",
  initialState: { list: [], selected: null, region: "all" },
  reducers: {
    /* fillList: (state, action) => {
      state.list = action.payload;
    } */ fillList: () => {
      console.log("should fill list");
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { fillList, setSelected } = countrySlice;

export default countrySlice.reducer;
