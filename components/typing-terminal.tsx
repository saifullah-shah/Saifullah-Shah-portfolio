"use client";

import { useEffect, useState } from "react";

const lineDefinitions = [
  { prompt: "$", text: "deploy --env production" },
  { prompt: "✔", text: "build container image ........ done (12s)" },
  { prompt: "✔", text: "run test suite ............... 42 passed" },
  { prompt: "✔", text: "push to registry ............. done" },
  { prompt: "⟶", text: "rolling update (3/3 replicas) healthy" },
  { prompt: "✓", text: "deployment successful in 0m 58s" },
];

const LINE_DELAY_MS = 900;
const CHAR_DELAY_MS = 28;

export default function TypingTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lineDefinitions.length) return;
    const current = lineDefinitions[lineIndex];
    const lineLength = current.prompt.length + 2 + current.text.length;

    if (charIndex < lineLength) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), CHAR_DELAY_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, LINE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);

  return (
    <div className="mx-auto mt-4 w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a]/90 text-left shadow-2xl shadow-emerald-400/5">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0d1424] px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-slate-500">
          saifullah@dev: ~/portfolio
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
          <span className="h-1.5 w-1.5 animate-status-ping rounded-full bg-emerald-400" />
          deploy: prod
        </span>
      </div>
      <div className="relative min-h-[136px] overflow-hidden p-2 font-mono text-xs leading-5 sm:text-sm">
        <div className="pointer-events-none absolute inset-0 animate-scanline h-full w-full bg-gradient-to-b from-transparent via-emerald-400/[0.04] to-transparent" />
        {lineDefinitions.slice(0, lineIndex).map((line, i) => (
          <p
            key={i}
            className={
              line.prompt === "✓"
                ? "font-semibold text-emerald-400"
                : line.prompt === "$"
                  ? "text-slate-200"
                  : "text-slate-400"
            }
          >
            <span className="mr-2 text-emerald-400">{line.prompt}</span>
            {line.text}
          </p>
        ))}
        {lineIndex < lineDefinitions.length && (
          <p className="text-slate-200">
            <span className="mr-2 text-emerald-400">
              {lineDefinitions[lineIndex].prompt}
            </span>
            {lineDefinitions[lineIndex].text.slice(0, charIndex)}
            {(charIndex || null) && (
              <span className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-[3px] bg-emerald-400" />
            )}
          </p>
        )}
        {lineIndex >= lineDefinitions.length && (
          <p className="text-slate-200">
            <span className="mr-2 text-emerald-400">$</span>
            <span className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-[3px] bg-emerald-400" />
          </p>
        )}
      </div>
    </div>
  );
}