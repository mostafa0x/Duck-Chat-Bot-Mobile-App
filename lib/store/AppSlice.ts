import { AppSliceType } from "@/types/AppSliceType";
import { createSlice } from "@reduxjs/toolkit";
[
  { role: "user", content: "Hi Duck Ai" },
  { role: "assistant", content: "Welcome to Duck Ai" },
  { role: "user", content: "Hi Duck Ai" },
  { role: "assistant", content: "Welcome to Duck Ai" },
];
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
    setCurrentChat: (
      state,
      action: { payload: AppSliceType["currentChat"] }
    ) => {
      state.currentChat = action.payload;
    },
    setMyMessage: (state, action) => {
      state.myMessage = action.payload;
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const { setCurrentChat, setMyMessage } = AppSlice.actions;
