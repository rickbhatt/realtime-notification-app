import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  status: Cookies.get("refresh_token") ? "success" : "loading",
  isLoggedIn: Cookies.get("rememberMe") ? true : false,
  refresh_token: Cookies.get("refresh_token")
    ? Cookies.get("refresh_token")
    : null,

  // access pass
  access_token: Cookies.get("access_token")
    ? Cookies.get("access_token")
    : null,

  user: null,

  error: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateAuthState: (state, action) => {
      state.status = "success";
      state.isLoggedIn = true;
      state.refresh_token = Cookies.get("refresh_token");
      state.access_token = Cookies.get("access_token");
      state.error = null;
    },
  },
});

export const { updateAuthState } = authenticationSlice.actions;
export const getIsLoggedIn = (state) => state.authentication.isLoggedIn;

export default authenticationSlice.reducer;
