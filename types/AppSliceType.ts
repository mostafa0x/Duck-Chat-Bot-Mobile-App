export interface AppSliceType {
  currentChat: currentChatType | null;
  history: currentChatType[];
  myRole: role;
  myMessage: string;
  isLoadingChat: boolean;
}

export type role = "assistant" | "user";
export type status = "loading" | "success" | "error";
export interface Message {
  id: number;
  role: role;
  content: string;
  status: status;
  error?: string;
}

export interface currentChatType {
  id: number;
  name?: string;
  messages: Message[];
}
