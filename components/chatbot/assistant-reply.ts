import type {
  ChatHistoryMessage,
  ChatRequest,
  ChatResponse,
} from "@/lib/chat/types";

/**
 * Client-side bridge to the server chat endpoint.
 *
 * This module only ever talks to our own `/api/chat` route; it holds no
 * credentials and never imports the Groq SDK. It intentionally throws on any
 * failure so the caller can render a single friendly message instead of
 * leaking transport details to the visitor.
 */
export async function createAssistantReply(
  message: string,
  history: ChatHistoryMessage[] = [],
): Promise<string> {
  const payload: ChatRequest =
    history.length > 0 ? { message, history } : { message };

  let response: Response;
  try {
    response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("chat:network");
  }

  if (!response.ok) {
    throw new Error(`chat:http-${response.status}`);
  }

  let data: ChatResponse;
  try {
    data = (await response.json()) as ChatResponse;
  } catch {
    throw new Error("chat:invalid-response");
  }

  if (typeof data?.answer !== "string" || data.answer.trim().length === 0) {
    throw new Error("chat:empty-answer");
  }

  return data.answer;
}