import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../axiosInstance";

export const userLoginAction = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      let response = await axiosInstance.post(`/account/login/`, {
        email: email,
        password: password,
      });
      return response;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      }

      return rejectWithValue("Some problem with request");
    }
  }
);
