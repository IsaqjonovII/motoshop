import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import { appAPI } from "services";

const rootReducers = combineReducers({
  auth: AuthSlice,
  [appAPI.reducerPath]: appAPI.reducer,
});

export default rootReducers;