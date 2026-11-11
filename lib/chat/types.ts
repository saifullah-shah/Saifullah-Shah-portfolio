/**
 * Shared request/response contracts for the chat pipeline.
 *
 * This module is intentionally dependency-free and type-only in practice, so it
 * can be imported by both the server route handler and client components without
 * pulling any server-side code into the browser bundle.
 */

/** Maximum length of a single chat message. */
export const MAX_CHAT_MESSAGE_LENGTH = 2000;

/** Maximum number of prior messages sent with a request. */
export const MAX_CHAT_HISTORY_MESSAGES = 8;

export type ChatHistoryRole = "user" | "assistant";

export interface ChatHistoryMessage {
  role: ChatHistoryRole;
  content: string;
}

export interface ChatRequest {
  message: string;
  history?: ChatHistoryMessage[];
}

export interface ChatResponse {
  answer: string;
}

export interface ChatErrorResponse {
  error: string;
}