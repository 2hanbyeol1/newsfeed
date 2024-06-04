import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabase/supabase";

const {
  data: { user }
} = await supabase.auth.getUser();

const initialState = user ? true : false;

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    login: (prevState) => {
      prevState = true;
      return prevState;
    },
    logout: (prevState) => {
      prevState = false;
      return prevState;
    }
  }
});

export const loginReducer = loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
