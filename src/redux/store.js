import { configureStore } from "@reduxjs/toolkit";

const emptyReducer = (state = {}) => state;

const store = configureStore({
  reducer: {
    empty: emptyReducer
  }
});

export default store;
