import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces";

export interface IAuthState {
  user: IUser | null;
}

const initialState: IAuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
