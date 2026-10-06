"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ChangeEvent, FormEvent, KeyboardEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";

const MAX_TEXTAREA_HEIGHT_PX = 120;

export default function ChatInput({
  disabled = false,
  focusRequest = 0,
  isPending = false,
  onSend,
}: {
  disabled?: boolean;
  /** Increment to move focus back to the field, e.g. after a suggestion click. */
  focusRequest?: number;
  isPending?: boolean;
  onSend: (message: string) => void;
}) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputId = useId();
  const hintId = useId();

  const isBlocked = disabled || isPending;
  const canSend = value.trim().length > 0 && !isBlocked;

  useEffect(() => {
    if (!isBlocked) textareaRef.current?.focus();
  }, [isBlocked]);

  useEffect(() => {
    if (focusRequest > 0) textareaRef.current?.focus();
  }, [focusRequest]);

  function resetTextareaHeight() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT_PX)}px`;
  }

  function submit() {
    const message = value.trim();
    if (message.length === 0 || isBlocked) return;
    onSend(message);
    setValue("");
    resetTextareaHeight();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
    resetTextareaHeight();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) return;
    // Let IME composition (CJK input) commit before treating Enter as "send".
    if (event.nativeEvent.isComposing) return;
    event.preventDefault();
    submit();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 border-t border-white/10 bg-[#0a0f1a] px-4 py-3"
    >
      <label htmlFor={inputId} className="sr-only">
        Message the portfolio assistant
      </label>
      <textarea
        ref={textareaRef}
        id={inputId}
        name="message"
        value={value}
        rows={1}
        disabled={isBlocked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-describedby={hintId}
        placeholder={isPending ? "The assistant is replying…" : "Ask about experience, skills, projects…"}
        className="max-h-[120px] min-h-[2.5rem] flex-1 resize-none rounded-lg border border-white/10 bg-[#0d1424] px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus-visible:border-emerald-400/40 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
      />

      <button
        type="submit"
        disabled={!canSend}
        aria-label={isPending ? "Waiting for the assistant to reply" : "Send message"}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400 text-[#0a0f1a] transition-colors hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-500 motion-reduce:transition-none"
      >
        {isPending ? (
          <LoaderCircle
            className="h-4 w-4 animate-spin motion-reduce:animate-none"
            aria-hidden="true"
          />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
      </button>

      <p id={hintId} className="sr-only">
        Press Enter to send. Press Shift plus Enter for a new line.
      </p>
    </form>
  );
}