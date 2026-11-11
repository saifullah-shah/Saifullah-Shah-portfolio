"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, CheckCircle2, ListChecks, ShieldCheck, Wrench } from "lucide-react";

const stages = [
  { icon: Brain, label: "Understand", status: "intent + constraints parsed" },
  { icon: ListChecks, label: "Plan", status: "tasks decomposed" },
  { icon: Wrench, label: "Act", status: "tools / knowledge called" },
  { icon: ShieldCheck, label: "Respond", status: "result validated" },
];

const STAGE_DURATION_MS = 2000;

const placements = [
  "left-1/2 top-5 -translate-x-1/2 -translate-y-1/2",
  "right-5 top-1/2 translate-x-1/2 -translate-y-1/2",
  "left-1/2 bottom-5 -translate-x-1/2 translate-y-1/2",
  "left-5 top-1/2 -translate-x-1/2 -translate-y-1/2",
];

export default function AgentLoop() {
  const [stage, setStage] = useState(0);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () =>
      setPageVisible(document.visibilityState === "visible");
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!inView || !pageVisible || reducedMotion) return;
    const timer = setInterval(
      () => setStage((current) => (current + 1) % (stages.length + 1)),
      STAGE_DURATION_MS,
    );
    return () => clearInterval(timer);
  }, [inView, pageVisible, reducedMotion]);

  const activeStage = reducedMotion ? stages.length : stage;
  const isComplete = activeStage >= stages.length;
  const currentStage = isComplete ? null : stages[activeStage];

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1a] p-6"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <span className="h-1.5 w-1.5 animate-status-ping rounded-full bg-cyan-400" />
          agent: autonomous-workflow
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
            illustrative workflow
          </span>
          <span className="font-mono text-xs text-slate-400">
            trigger: event: new task
          </span>
        </div>
      </div>

      <p className="sr-only">
        Illustrative agent loop: Understand, Plan, Act, and Respond.
      </p>

      {/* Desktop orbit */}
      <div
        aria-hidden="true"
        className="relative mx-auto hidden aspect-square w-full max-w-[280px] lg:block"
      >
        <div className="absolute inset-5 rounded-full border border-white/10" />
        <div className="absolute inset-10 rounded-full border border-dashed border-white/5" />

        <div className="absolute inset-5 animate-orbit">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
        </div>

        {stages.map((item, index) => {
          const isDone = activeStage > index;
          const isCurrent = activeStage === index;
          return (
            <div
              key={item.label}
              className={`absolute ${placements[index]}`}
            >
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-500 ${
                    isCurrent
                      ? "border-emerald-400/60 bg-emerald-400/15"
                      : isDone
                        ? "border-emerald-400/20 bg-emerald-400/10"
                        : "border-white/10 bg-white/5"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <item.icon
                      className={`h-4 w-4 ${
                        isCurrent
                          ? "animate-glow text-emerald-400"
                          : "text-slate-400"
                      }`}
                    />
                  )}
                </span>
                <span
                  className={`mt-1 font-mono text-[9px] uppercase tracking-wider ${
                    isCurrent
                      ? "text-cyan-400"
                      : isDone
                        ? "text-emerald-400/70"
                        : "text-slate-400"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}

        <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
            loop status
          </span>
          <span
            className={`mt-1 font-mono text-sm ${
              isComplete ? "text-cyan-400" : "text-emerald-400"
            }`}
          >
            {isComplete ? "complete" : currentStage?.label}
          </span>
          <span className="mt-1 max-w-[140px] font-mono text-[10px] leading-4 text-slate-400">
            {isComplete ? "result validated" : currentStage?.status}
          </span>
        </div>
      </div>

      {/* Mobile / tablet stepper */}
      <ol className="space-y-3 lg:hidden">
        {stages.map((item, index) => {
          const isDone = activeStage > index;
          const isCurrent = activeStage === index;
          return (
            <li
              key={item.label}
              className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-colors duration-500 ${
                isCurrent
                  ? "border-emerald-400/40 bg-emerald-400/10"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border ${
                  isCurrent
                    ? "border-emerald-400/60 bg-emerald-400/15"
                    : isDone
                      ? "border-emerald-400/20 bg-emerald-400/10"
                      : "border-white/10 bg-white/5"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <item.icon
                    className={`h-4 w-4 ${
                      isCurrent
                        ? "animate-glow text-emerald-400"
                        : "text-slate-400"
                    }`}
                  />
                )}
              </span>
              <div className="min-w-0">
                <p
                  className={`font-mono text-xs uppercase tracking-wider ${
                    isCurrent
                      ? "text-cyan-400"
                      : isDone
                        ? "text-emerald-400/70"
                        : "text-slate-400"
                  }`}
                >
                  {item.label}
                </p>
                <p className="truncate font-mono text-[10px] text-slate-400">
                  {isDone || isCurrent ? item.status : "pending"}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 border-t border-white/10 pt-4 font-mono text-xs text-slate-400">
        <span className="text-emerald-400">$</span> status:{" "}
        {isComplete
          ? "loop complete · 2 tools · 1.4s"
          : `${currentStage?.label.toLowerCase()} stage in progress...`}
      </div>
    </div>
  );
}
