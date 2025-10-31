export interface AppSliceType {
  currentChat: currentChatType | null;
  history: currentChatType[];
}

export type role = "assistant" | "user";

export interface Message {
  role: role;
  content: string;
}

export interface currentChatType {
  id: string;
  messages: Message[];
}
