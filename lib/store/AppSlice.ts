import { AppSliceType, Message } from "@/types/AppSliceType";
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
  isLoadingChat: false,
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
    sendMessage: (state) => {
      const isLoading = state.isLoadingChat;
      if (isLoading) return;
      const myMessage: Message = {
        content: state.myMessage,
        role: state.myRole,
        status: "loading",
      };
      if (state.currentChat) {
        state.currentChat?.messages.push(myMessage);
        state.myMessage = "";
        state.isLoadingChat = true;
      }
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const { setCurrentChat, setMyMessage, sendMessage } = AppSlice.actions;
