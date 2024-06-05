import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/login.slice";

const emptyReducer = (state = {}) => state;

const store = configureStore({
  reducer: { login: loginReducer, empty: emptyReducer }
});

export default store;
