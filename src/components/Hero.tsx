"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── Animated counter hook ─────────────────────────────── */
function useCountUp(end: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
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
function StatItem({ end, suffix, label, started, delay }: any) {
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

  /* 🔹 Carousel state */
  const images = [
    "/ras-conf.png",
    "/hero-left.svg",
    "/hero-right.svg",
    "/ras-conf.png",
    "/hero-right.svg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => setContentVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const observerCb = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0]?.isIntersecting) setStatsVisible(true);
  }, []);

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
      {/* 🔹 Image Carousel (replaces video) */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={images[current]}
          className="h-full w-full object-cover transition-all duration-700"
          alt="hero"
        />

        {/* Left */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-20"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Right */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-20"
        >
          <ChevronRight size={36} />
        </button>
      </div>

      {/* SAME overlays (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e0a12] via-[#7a1b2e] to-[#1e0a12] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[#b14a62]/20" />

      {/* Content */}
      <div
        className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center md:py-28 lg:py-32 transition-all duration-1000 ease-out"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c] sm:text-sm">
          IEEE Robotics and Automation Society
        </p>

        <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-[3.25rem]">
          The leading organization in research and technological developments in
          robotics and automation worldwide
        </h1>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#7a1b2e]"
          >
            Become a RAS Member
          </Link>
          <Link
            href="#"
            className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-white/15 bg-[#3a0e1a]/85 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-6 py-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              {...s}
              started={statsVisible}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
