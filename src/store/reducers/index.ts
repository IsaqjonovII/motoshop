import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./UserSlice";
import ProductSlice from "./ProductSlice";
import { authApi } from "services/user";
import { adApi } from "services/ad";

const rootReducers = combineReducers({
  auth: AuthSlice,
  likedProducts: ProductSlice,
  [authApi.reducerPath]: authApi.reducer,
  [adApi.reducerPath]: adApi.reducer,
});

export default rootReducers;
