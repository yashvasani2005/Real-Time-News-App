// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
// import newsReducer from "./slices/newsReducer";
import newsReducer from "../redux/slice/newsReducer" // Updated import

const store = configureStore({
  reducer: { news: newsReducer },
});

export default store;
