"use client";

import { useEffect, useRef } from "react";
import { Bot, X } from "lucide-react";
import ChatInput from "./chat-input";
import ChatMessage from "./chat-message";
import ChatSuggestions from "./chat-suggestions";
import TypingIndicator from "./typing-indicator";
import { SUGGESTED_QUESTIONS } from "./data";
import type { ChatMessage as ChatMessageType } from "./types";

export default function ChatWindow({
  focusRequest,
  isPending,
  messages,
  showSuggestions,
  onClose,
  onSend,
  onSelectSuggestion,
}: {
  focusRequest: number;
  isPending: boolean;
  messages: ChatMessageType[];
  showSuggestions: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
  onSelectSuggestion: (question: string) => void;
}) {
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, isPending]);

  return (
    <section
      id="portfolio-chatbot-panel"
      role="dialog"
      aria-label="Portfolio Assistant"
      className="chat-panel-enter fixed bottom-24 right-4 z-50 flex h-[min(70vh,32rem)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a]/95 shadow-2xl shadow-emerald-400/5 backdrop-blur-md"
    >
      <header className="flex items-center gap-3 border-b border-white/10 bg-[#0d1424] px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-400">
          <Bot className="h-4 w-4" aria-hidden="true" />
        </span>

        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold text-slate-100">
            Portfolio Assistant
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
            Portfolio knowledge base
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close the portfolio assistant"
          className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 motion-reduce:transition-none"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </header>

      <div
        ref={logRef}
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        aria-label="Conversation with the portfolio assistant"
        className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4"
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isPending && <TypingIndicator />}
      </div>

      {showSuggestions && (
        <ChatSuggestions
          questions={SUGGESTED_QUESTIONS}
          disabled={isPending}
          onSelect={onSelectSuggestion}
        />
      )}

      <ChatInput
        focusRequest={focusRequest}
        isPending={isPending}
        onSend={onSend}
      />
    </section>
  );
}