import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../slice/authenticationSlice";

export default configureStore({
  reducer: {
    auth: authenticationReducer,
  },
  devTools: true,
});
