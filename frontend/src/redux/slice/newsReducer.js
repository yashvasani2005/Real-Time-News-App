// src/redux/slices/newsReducer.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=74081f756fdc4acd8f321d3208f3bd12");
  return response.data.articles;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
