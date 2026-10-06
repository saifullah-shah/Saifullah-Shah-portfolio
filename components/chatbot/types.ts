export type ChatRole = "assistant" | "user";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
}

export interface SuggestedQuestion {
  id: string;
  text: string;
}