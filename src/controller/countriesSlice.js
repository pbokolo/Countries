import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: { list: [], selectedCountry: null },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setList, setSelectedCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
