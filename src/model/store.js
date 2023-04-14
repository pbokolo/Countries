/**
 * This is the single source of truth accross the application
 *
 */

import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../controller/countrySlice";

export default configureStore({ reducer: { countries: countryReducer } });
