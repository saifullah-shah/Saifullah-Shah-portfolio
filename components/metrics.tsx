"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 1.5,
    suffix: "+",
    label: "Years in AI engineering",
    decimals: 1,
  },
  { value: 165, suffix: "+", label: "Automated tests written", decimals: 0 },
  { value: 3, suffix: "", label: "End-to-end AI projects built", decimals: 0 },
  { value: 1, suffix: "", label: "Govt. recognition for AI work", decimals: 0 },
];

function CountUp({
  target,
  suffix,
  start,
  duration = 1600,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  start: boolean;
  duration?: number;
  decimals?: number;
}) {
  // Render the final value on the server (and for no-JS visitors), then animate
  // from zero only after the metric strip enters the viewport.
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (!start) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame: number;
    const t0 = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return (
    <span>
      {(display ?? target).toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4"
    >
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="relative flex flex-col items-center gap-1 bg-[#0d1424] px-6 py-8 text-center"
        >
          <span className="text-4xl font-bold tabular-nums text-emerald-400">
            <CountUp
              target={metric.value}
              suffix={metric.suffix}
              start={start}
              decimals={metric.decimals}
            />
          </span>
          <span className="text-xs text-slate-400 sm:text-sm">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}