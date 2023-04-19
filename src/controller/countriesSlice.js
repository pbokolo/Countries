import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: { list: [], selectedCountry: null, region: "all" },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { setList, setSelectedCountry, setRegion } =
  countriesSlice.actions;

export default countriesSlice.reducer;
