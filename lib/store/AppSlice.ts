import { AppSliceType } from "@/types/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  currentChat: null,
  history: [],
};

const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {},
});

export const AppReducer = AppSlice.reducer;
