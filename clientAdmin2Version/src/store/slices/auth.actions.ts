import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { AuthService } from "src/services/auth/auth.service";

import { setLocalStorage } from "src/settings/localstorage/localStorage";


export const login = createAsyncThunk(
  "auth/login",
  async ({ login, password } : any, thunkAPI) => {
    try {
      const response = await AuthService.login(login, password);
      toastr.success("Login", "Completed successfully");
      setLocalStorage('status', response.data.status)
      setLocalStorage('isAuth', response.data.data.login)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
