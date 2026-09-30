"use client";

import * as React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/site-data";

/* ------------------------------------------------------------------ */
/*  Logo: sun mark + wordmark                                          */
/* ------------------------------------------------------------------ */

export function SunMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#12291B" />
      <circle cx="32" cy="36" r="10" fill="#F2A93B" />
      <g stroke="#F2A93B" strokeWidth="3.2" strokeLinecap="round">
        <line x1="32" y1="15" x2="32" y2="20" />
        <line x1="17" y1="22.5" x2="20.3" y2="25.8" />
        <line x1="43.7" y1="25.8" x2="47" y2="22.5" />
        <line x1="12" y1="36" x2="17" y2="36" />
        <line x1="47" y1="36" x2="52" y2="36" />
      </g>
      <g stroke="#7FB069" strokeWidth="3.2" strokeLinecap="round">
        <line x1="17" y1="49.5" x2="20.3" y2="46.2" />
        <line x1="43.7" y1="46.2" x2="47" y2="49.5" />
        <line x1="32" y1="51" x2="32" y2="55" />
      </g>
      {/* spire: the tallest ray, our namesake */}
      <path d="M32 4 L36 12 L28 12 Z" fill="#F2A93B" />
    </svg>
  );
}

export function Logo({
  light = false,
  onNavigate,
}: {
  light?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onNavigate?.();
      }}
      className="flex items-center gap-3 group"
      aria-label={`${BRAND.name}, back to home`}
    >
      <SunMark className="h-11 w-11 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.45rem] font-semibold tracking-tight ${
            light ? "text-cream" : "text-forest"
          }`}
        >
          Sunspire
        </span>
        <span
          className={`text-[0.6rem] font-extrabold uppercase tracking-[0.34em] mt-1 ${
            light ? "text-sun" : "text-sun-deep"
          }`}
        >
          Energy
        </span>
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal on scroll                                                   */
/* ------------------------------------------------------------------ */

export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = React.useRef<T | null>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${delay}ms`);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
}) {
  const ref = useReveal<HTMLElement>(delay);
  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */

export function Counter({
  value,
  suffix = "",
  decimals = 0,
  className = "",
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState("0");
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1800;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - t0) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay((value * eased).toFixed(decimals));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, decimals]);

  return (
    <span ref={ref} className={className}>
      {decimals > 0 ? Number(display).toFixed(decimals) : Math.round(Number(display)).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading                                                    */
/* ------------------------------------------------------------------ */

export function SectionHead({
  kicker,
  title,
  text,
  center = false,
  light = false,
}: {
  kicker: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className={`kicker ${center ? "kicker-center" : ""} ${light ? "text-sun" : "text-sun-deep"}`}>
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`font-display mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.12] tracking-tight ${
            light ? "text-cream" : "text-forest"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {text ? (
        <Reveal delay={160}>
          <p className={`mt-5 text-base leading-relaxed ${light ? "text-cream/75" : "text-muted-foreground"}`}>
            {text}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page banner for inner pages                                        */
/* ------------------------------------------------------------------ */

export function PageBanner({ kicker, title, crumb }: { kicker: string; title: string; crumb: string }) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 banner-grid" aria-hidden="true" />
      <svg
        className="absolute -right-10 -bottom-16 h-72 w-72 text-sun/20 spin-slow"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={50 + 22 * Math.cos(angle)}
                y1={50 + 22 * Math.sin(angle)}
                x2={50 + 34 * Math.cos(angle)}
                y2={50 + 34 * Math.sin(angle)}
              />
            );
          })}
        </g>
        <circle cx="50" cy="50" r="14" fill="currentColor" />
      </svg>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <Reveal>
          <span className="kicker text-sun">{kicker}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 flex items-center gap-2 text-sm text-cream/70">
            <span>Home</span>
            <span aria-hidden="true">/</span>
            <span className="text-sun font-semibold">{crumb}</span>
          </p>
        </Reveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sun via-sun/40 to-transparent" aria-hidden="true" />
    </section>
  );
}
