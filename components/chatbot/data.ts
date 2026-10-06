import type { ChatMessage, SuggestedQuestion } from "./types";

export const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text: "Hi, I'm the Portfolio Assistant. I can tell you about SaifUllah's professional profile, work experience, technical skills and projects. Pick a question below or type your own.",
};

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  { id: "experience", text: "What is Syed's professional experience?" },
  { id: "skills", text: "What are his technical skills?" },
  { id: "ai-projects", text: "Tell me about his AI projects." },
  { id: "agentic-ai", text: "What is his experience with Agentic AI?" },
];

/**
 * Shown in place of an answer when the request fails. Deliberately generic so
 * no API or network detail is ever surfaced to the visitor.
 */
export const ASSISTANT_ERROR_MESSAGE =
  "Sorry, I’m unable to respond right now. Please try again.";