/**
 * Shared request/response contracts for the chat pipeline.
 *
 * This module is intentionally dependency-free and type-only in practice, so it
 * can be imported by both the server route handler and client components without
 * pulling any server-side code into the browser bundle.
 */

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  answer: string;
}

export interface ChatErrorResponse {
  error: string;
}