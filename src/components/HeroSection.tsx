"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { contactInfo, summary } from "@/lib/resume-data";

export default function HeroSection() {
  const stripRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      stripRef.current,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.7 }
    )
      .fromTo(
        nameRef.current?.querySelectorAll(".name-word") ?? [],
        { opacity: 0, y: 40, rotateX: -25 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.1, stagger: 0.12 },
        "-=0.4"
      )
      .fromTo(
        summaryRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.45"
      )
      .fromTo(
        contactRef.current?.children
          ? Array.from(contactRef.current.children)
          : [],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
        "-=0.4"
      );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      {/* Mono metadata strip */}
      <div
        ref={stripRef}
        className="font-mono-label flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 opacity-0"
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
          Available · 2026
        </span>
        <span className="hidden sm:inline text-text-muted/40">/</span>
        <span>{contactInfo.location}</span>
        <span className="hidden sm:inline text-text-muted/40">/</span>
        <span>AI · Biopharma · Strategy</span>
      </div>

      {/* Name — display serif with italic accent */}
      <h1
        ref={nameRef}
        className="font-display text-[clamp(3rem,11vw,8.5rem)] leading-[0.92] tracking-tight mb-10 text-warm"
        style={{ perspective: "1000px" }}
      >
        <span className="name-word inline-block">Matthew </span>
        <span className="name-word inline-block">G.</span>
        <br />
        <span className="name-word font-display-italic inline-block text-accent-soft">
          Schulze
        </span>
      </h1>

      {/* Hairline rule */}
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-10" />

      <p
        ref={summaryRef}
        className="max-w-2xl text-base sm:text-lg text-text-secondary leading-[1.7] mb-12 opacity-0"
      >
        {summary}
      </p>

      <div
        ref={contactRef}
        className="flex flex-wrap justify-center gap-3 max-w-3xl"
      >
        <a
          href={`mailto:${contactInfo.email}`}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface/80 backdrop-blur border border-border text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {contactInfo.email}
        </a>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 backdrop-blur border border-accent/30 text-sm text-accent hover:bg-accent/20 hover:border-accent/60 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-mono-label">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-muted/50 to-transparent" />
      </div>
    </section>
  );
}
