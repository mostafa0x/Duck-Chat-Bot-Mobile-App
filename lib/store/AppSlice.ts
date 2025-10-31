import { AppSliceType } from "@/types/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppSliceType = {
  currentChat: null,
  history: [],
  myRole: "user",
  myMessage: "",
};

const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setMyMessage: (state, action) => {
      state.myMessage = action.payload;
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const { setMyMessage } = AppSlice.actions;
