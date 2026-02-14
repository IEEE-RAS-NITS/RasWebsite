"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

/* ── Animated counter hook ─────────────────────────────── */
function useCountUp(
  end: number,
  duration = 2000,
  start = false,
) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.floor(eased * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, end, duration]);

  return value;
}

/* ── Single stat card ──────────────────────────────────── */
function StatItem({
  end,
  suffix,
  label,
  started,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  started: boolean;
  delay: number;
}) {
  const [go, setGo] = useState(false);

  useEffect(() => {
    if (!started) return;
    const id = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(id);
  }, [started, delay]);

  const count = useCountUp(end, 2000, go);

  return (
    <div
      className="text-center transition-all duration-700"
      style={{
        opacity: go ? 1 : 0,
        transform: go ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <p className="text-3xl font-bold text-white md:text-4xl lg:text-[2.75rem]">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-gray-300">{label}</p>
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────── */
export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  /* trigger content entrance after mount */
  useEffect(() => {
    const id = requestAnimationFrame(() => setContentVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  /* intersection observer for stats */
  const observerCb = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) setStatsVisible(true);
    },
    [],
  );

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(observerCb, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [observerCb]);

  const stats = [
    { end: 24000, suffix: "+", label: "Members Worldwide" },
    { end: 120, suffix: "", label: "Countries" },
    { end: 12660, suffix: "", label: "Publications" },
    { end: 890, suffix: "", label: "Local Chapters" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e0a12] via-[#7a1b2e] to-[#1e0a12]" />

      {/* Side images with overlay */}
      <div className="absolute inset-0 flex">
        {/* Left image */}
        <div className="relative w-2/5 shrink-0 hidden sm:block">
          <Image
            src="/hero-left.svg"
            alt="VR robotics demonstration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e0a12]/30 via-[#7a1b2e]/60 to-[#7a1b2e]/90" />
        </div>

        {/* Centre spacer */}
        <div className="flex-1" />

        {/* Right image */}
        <div className="relative w-2/5 shrink-0 hidden sm:block">
          <Image
            src="/hero-right.svg"
            alt="IEEE RAS conference booth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1e0a12]/30 via-[#7a1b2e]/60 to-[#7a1b2e]/90" />
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center md:py-28 lg:py-32 transition-all duration-1000 ease-out"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c] sm:text-sm transition-all duration-700 delay-200"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(15px)",
          }}
        >
          IEEE Robotics and Automation Society
        </p>

        <h1
          className="mt-6 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15] transition-all duration-700 delay-400 drop-shadow-lg"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          The leading organization in research and technological developments in
          robotics and automation worldwide
        </h1>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 transition-all duration-700 delay-600"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <Link
            href="#"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#7a1b2e] no-underline shadow-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
          >
            Become a RAS Member
          </Link>
          <Link
            href="#"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-white/15 bg-[#3a0e1a]/85 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-6 py-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              end={s.end}
              suffix={s.suffix}
              label={s.label}
              started={statsVisible}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
