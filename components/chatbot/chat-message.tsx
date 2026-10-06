"use client";

import { Bot, User } from "lucide-react";
import type { ChatMessage as ChatMessageType } from "./types";

export default function ChatMessage({ message }: { message: ChatMessageType }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-end gap-2 ${
        isUser ? "flex-row-reverse" : "flex-row"
      } motion-safe:animate-fade-in-up`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${
          isUser
            ? "border-white/10 bg-[#0d1424] text-slate-400"
            : "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
        }`}
        aria-hidden="true"
      >
        {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
      </span>

      <div
        className={`max-w-[85%] rounded-xl border px-3 py-2 text-sm leading-6 ${
          isUser
            ? "rounded-br-sm border-emerald-400/30 bg-emerald-400/10 text-slate-100"
            : "rounded-bl-sm border-white/10 bg-[#0d1424] text-slate-300"
        }`}
      >
        <span className="sr-only">{isUser ? "You said: " : "Assistant said: "}</span>
        {message.text}
      </div>
    </div>
  );
}