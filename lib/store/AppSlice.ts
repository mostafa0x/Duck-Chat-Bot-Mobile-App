import { getData, setData } from "@/services/Storage";
import { AppSliceType, currentChatType, Message } from "@/types/AppSliceType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const initialState: AppSliceType = {
  currentChat: null,
  history: [],
  myRole: "user",
  myMessage: "",
  isLoadingChat: false,
};

export const setHistory = createAsyncThunk<
  currentChatType[],
  void,
  { state: RootState }
>("AppSlice/setHistory", async (_, { getState }) => {
  const state = getState();
  const current = state.AppReducer.currentChat;
  const history = state.AppReducer.history;

  if (!current) {
    console.warn("No current chat found, skipping save.");
    return [];
  }

  const curr = history.findIndex((message) => message.id === current.id);
  let newHistory = [...history];

  if (curr !== -1) {
    newHistory[curr] = current;
  } else {
    newHistory = [current, ...history];
  }

  try {
    await setData(newHistory);
  } catch (err) {
    console.error("Error saving history:", err);
    return [];
  }

  return newHistory;
});

export const getHistory = createAsyncThunk<currentChatType[]>(
  "AppSlice/getHistory",
  async () => {
    try {
      return await getData();
    } catch (err) {
      return [];
    }
  }
);

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
        if (state.currentChat.messages.length <= 0) {
          state.currentChat.name = myMessage.content
            .split(" ")
            .slice(0, 10)
            .join(" ");
        }
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
  extraReducers: (builder) => {
    builder.addCase(setHistory.fulfilled, (state, action) => {
      state.history = action.payload;
    });
    builder.addCase(getHistory.fulfilled, (state, action) => {
      state.history = action.payload;
    });
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
