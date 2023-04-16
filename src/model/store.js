import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../controller/countriesSlice";

/* Creates and exports a redux store */
export default configureStore({ reducer: { countries: countriesReducer } });
