import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces";

export interface IAuthState {
  user: IUser | null;
  token: string;
}

const initialState: IAuthState = {
  user: null,
  token: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      (state.user = action.payload?.user),
        (state.token = action.payload?.token);
    },
    logOut(state) {
      (state.token = ""), (state.user = null);
    },
  },
});
export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
