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
    sendMessage: (
      state,
      action: {
        payload: {
          id: number;
          message?: Message;
        };
      }
    ) => {
      const isLoading = state.isLoadingChat;
      if (isLoading) return;
      const haveMessage = !!action.payload.message;
      const myMessage: Message = {
        id: action.payload.id,
        content: haveMessage
          ? action.payload.message?.content ?? ""
          : state.myMessage,
        role: state.myRole,
        status: "loading",
      };
      if (state.currentChat) {
        state.currentChat?.messages.push(myMessage);
        state.myMessage = "";
        state.isLoadingChat = true;
      }
    },

    receiveMessage: (
      state,
      action: { payload: { id: number; content: string } }
    ) => {
      // const cleanText = action.payload.content.replace(/<[^>]*>/g, "");

      const aiMessage: Message = {
        id: action.payload.id,
        content: action.payload.content,
        role: "assistant",
        status: "success",
      };
      if (state.currentChat) {
        state.currentChat?.messages.push(aiMessage);
        state.isLoadingChat = false;
      }
    },
    retryErrorMessage: (state, action) => {
      const messageId = action.payload;

      if (state.currentChat) {
        state.currentChat.messages = state.currentChat?.messages.filter(
          (message) => message.id !== messageId
        );

        // state.isLoadingChat = true;
      }
    },
    setErrorMessage: (
      state,
      action: { payload: { id: number; error: string } }
    ) => {
      const messageId = action.payload.id;
      if (state.currentChat) {
        state.currentChat?.messages.map((message) => {
          if (message.id === messageId) {
            message.status = "error";
            message.error = action.payload.error;
          }
        });
        state.isLoadingChat = false;
      }
    },
  },
});

export const AppReducer = AppSlice.reducer;
export const {
  setCurrentChat,
  setMyMessage,
  sendMessage,
  receiveMessage,
  setErrorMessage,
  retryErrorMessage,
} = AppSlice.actions;
