import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: true,
    list: [],
    selectedCountry: null,
    region: "all",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = state.list[action.payload];
    },
    changeSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const {
  setLoading,
  setList,
  setSelectedCountry,
  changeSelectedCountry,
  setRegion,
} = countriesSlice.actions;

export default countriesSlice.reducer;
