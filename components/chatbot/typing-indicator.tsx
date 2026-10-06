"use client";

import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
        aria-hidden="true"
      >
        <Bot className="h-3.5 w-3.5" />
      </span>

      <div className="flex items-center gap-1 rounded-xl rounded-bl-sm border border-white/10 bg-[#0d1424] px-3 py-3">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 motion-reduce:animate-none"
            style={{ animationDelay: `${index * 160}ms` }}
          />
        ))}
        <span className="sr-only">The assistant is typing…</span>
      </div>
    </div>
  );
}