import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: true,
    list: [],
    selectedCountry: null,
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
  },
});

export const {
  setLoading,
  setList,
  setSelectedCountry,
  changeSelectedCountry,
} = countriesSlice.actions;

export default countriesSlice.reducer;
