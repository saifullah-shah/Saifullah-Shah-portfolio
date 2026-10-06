"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./chat-window";
import { ASSISTANT_ERROR_MESSAGE, WELCOME_MESSAGE } from "./data";
import { createAssistantReply } from "./assistant-reply";
import type { ChatMessage } from "./types";

let messageSequence = 0;

function nextMessageId(): string {
  messageSequence += 1;
  return `msg-${messageSequence}`;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [focusRequest, setFocusRequest] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);

  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleSend = useCallback(
    (message: string) => {
      const text = message.trim();
      if (text.length === 0 || isPending) return;

      setMessages((previous) => [...previous, { id: nextMessageId(), role: "user", text }]);
      setIsPending(true);

      void createAssistantReply(text)
        .then((reply) => {
          if (!isMountedRef.current) return;
          setMessages((previous) => [
            ...previous,
            { id: nextMessageId(), role: "assistant", text: reply },
          ]);
          setIsPending(false);
        })
        .catch(() => {
          if (!isMountedRef.current) return;
          setMessages((previous) => [
            ...previous,
            { id: nextMessageId(), role: "assistant", text: ASSISTANT_ERROR_MESSAGE },
          ]);
          setIsPending(false);
        });
    },
    [isPending],
  );

  const closeChat = useCallback(() => setIsOpen(false), []);

  const handleSelectSuggestion = useCallback(
    (question: string) => {
      // The suggestion button unmounts with this send, so hand focus to the field.
      setFocusRequest((count) => count + 1);
      handleSend(question);
    },
    [handleSend],
  );

  // Non-modal dialog: Escape closes, clicking outside dismisses, and focus
  // returns to the launcher so keyboard users never lose their place.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      launcherRef.current?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (panelRef.current?.contains(target)) return;
      if (launcherRef.current?.contains(target)) return;
      setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <>
      <div ref={panelRef} className="contents">
        {isOpen && (
          <ChatWindow
            focusRequest={focusRequest}
            isPending={isPending}
            messages={messages}
            showSuggestions={messages.length <= 1}
            onClose={closeChat}
            onSend={handleSend}
            onSelectSuggestion={handleSelectSuggestion}
          />
        )}
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <span
          aria-hidden="true"
          className={`hidden rounded-lg border border-white/10 bg-[#0d1424] px-3 py-2 font-mono text-xs text-slate-300 transition-opacity duration-200 sm:block ${
            isOpen ? "pointer-events-none opacity-0" : "opacity-100"
          } motion-reduce:transition-none`}
        >
          Ask me anything
        </span>

        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="portfolio-chatbot-panel"
          aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
          className="chat-fab-enter relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-[#0a0f1a] shadow-lg shadow-emerald-400/20 transition-colors hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 motion-reduce:transition-none"
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
    </>
  );
}