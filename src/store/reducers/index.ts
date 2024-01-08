import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import { authApi } from "services/user";
import { adApi } from "services/ad";

const rootReducers = combineReducers({
  auth: AuthSlice,
  [authApi.reducerPath]: authApi.reducer,
  [adApi.reducerPath]: adApi.reducer,
});

export default rootReducers;
