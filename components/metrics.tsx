"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 2, suffix: "+", label: "Years of DevOps experience" },
  { value: 50, suffix: "+", label: "Cloud deployments delivered" },
  { value: 3, suffix: "", label: "Cloud platforms (AWS · Azure · GCP)" },
  { value: 99, suffix: "%", label: "Uptime maintained across projects" },
];

function CountUp({
  target,
  suffix,
  start,
  duration = 1600,
}: {
  target: number;
  suffix: string;
  start: boolean;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return (
    <span>
      {display}
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
            <CountUp target={metric.value} suffix={metric.suffix} start={start} />
          </span>
          <span className="text-xs text-slate-400 sm:text-sm">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}