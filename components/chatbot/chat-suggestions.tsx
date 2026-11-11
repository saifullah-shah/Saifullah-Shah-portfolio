"use client";

import { Sparkles } from "lucide-react";
import type { SuggestedQuestion } from "./types";

export default function ChatSuggestions({
  questions,
  disabled = false,
  onSelect,
}: {
  questions: SuggestedQuestion[];
  disabled?: boolean;
  onSelect: (question: string) => void;
}) {
  return (
    <div className="border-t border-white/10 px-4 py-3">
      <p className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
        <Sparkles className="h-3 w-3 text-emerald-400" aria-hidden="true" />
        Suggested questions
      </p>
      <ul className="flex flex-wrap gap-2">
        {questions.map((question) => (
          <li key={question.id}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onSelect(question.text)}
              className="rounded-lg border border-white/10 bg-[#0d1424] px-3 py-1.5 text-left font-mono text-xs text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-white/10 disabled:hover:text-slate-300 motion-reduce:transition-none"
            >
              {question.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}