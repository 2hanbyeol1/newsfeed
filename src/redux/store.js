import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/login.slice";

const store = configureStore({
  reducer: { login: loginReducer }
});

export default store;
