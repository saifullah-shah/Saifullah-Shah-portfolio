"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  FileText,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const stages = [
  { icon: MessageSquareText, label: "Prompt", status: "Question received" },
  { icon: FileText, label: "Context", status: "Knowledge loaded" },
  { icon: Sparkles, label: "Generate", status: "Response generated" },
  { icon: ShieldCheck, label: "Validate", status: "Scope rules applied" },
];

const STATE_DURATION_MS = 1800;

export default function Pipeline() {
  const [stage, setStage] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = setInterval(
      () => setStage((s) => (s + 1) % (stages.length + 1)),
      STATE_DURATION_MS,
    );
    return () => clearInterval(timer);
  }, [reducedMotion]);

  const activeStage = reducedMotion ? stages.length : stage;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a] p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <span className="h-1.5 w-1.5 animate-status-ping rounded-full bg-cyan-400 motion-reduce:animate-none" />
          assistant: portfolio-agent
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
          illustrative pipeline
        </span>
      </div>

      <div className="flex items-center">
        {stages.map((stageItem, i) => {
          const isActive = activeStage > i;
          const isCurrent = activeStage === i;
          return (
            <div key={stageItem.label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <span
                    className={`block rounded-lg p-3 transition-colors duration-500 ${
                      isCurrent
                        ? "bg-emerald-400/15 ring-1 ring-emerald-400/60"
                        : isActive
                          ? "bg-emerald-400/10"
                          : "bg-white/5"
                    }`}
                  >
                    {isActive ? (
                      <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                    ) : (
                      <stageItem.icon
                        className={`h-6 w-6 ${
                          isCurrent
                            ? "animate-glow text-emerald-400 motion-reduce:animate-none"
                            : "text-slate-400"
                        }`}
                      />
                    )}
                  </span>
                  {isCurrent && (
                    <span
                      aria-hidden="true"
                      className="pulse-ring absolute inset-0 rounded-lg"
                    />
                  )}
                </div>
                <span
                  className={`mt-2 font-mono text-[10px] uppercase tracking-wider sm:text-xs ${
                    isCurrent ? "text-emerald-400" : "text-slate-400"
                  }`}
                >
                  {stageItem.label}
                </span>
                <span className="font-mono text-[9px] text-slate-400 sm:text-[10px]">
                  {isActive || isCurrent ? stageItem.status : "pending"}
                </span>
              </div>

              {i < stages.length - 1 && (
                <div className="relative mx-2 mb-8 h-0.5 flex-1 overflow-hidden rounded bg-white/10 sm:mx-4">
                  <div
                    className={`absolute top-0 left-0 h-full w-1/4 rounded transition-opacity duration-500 ${
                      activeStage > i
                        ? "animate-pipeline-flow bg-emerald-400 motion-reduce:animate-none"
                        : "opacity-0"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 border-t border-white/10 pt-4 font-mono text-xs text-slate-400">
        <span className="text-emerald-400">$</span> status:{" "}
        {activeStage >= stages.length
          ? "answer ready · knowledge context supplied"
          : `${stages[activeStage].label} stage in progress...`}
      </div>
      <p className="sr-only">
        Illustrative assistant pipeline: prompt received, portfolio knowledge
        loaded, response generated, and scope rules applied.
      </p>
    </div>
  );
}
