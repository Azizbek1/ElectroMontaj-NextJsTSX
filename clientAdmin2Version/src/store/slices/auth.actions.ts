import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { AuthService } from "src/services/auth/auth.service";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password } : any, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      toastr.success("Login", "Completed successfully");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
