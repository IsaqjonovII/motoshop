import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./UserSlice";
import { authApi } from "services/auth";
import { adApi } from "services/ad";
import { userApi } from "services/user";

const rootReducers = combineReducers({
  auth: AuthSlice,
  [authApi.reducerPath]: authApi.reducer,
  [adApi.reducerPath]: adApi.reducer,
  [userApi.reducerPath]: userApi.reducer
});

export default rootReducers;
