"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stints } from "@/lib/resume-data";
import TimelineCard from "./TimelineCard";
import SectionReveal from "./SectionReveal";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !lineRef.current || !cardsRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 85%",
          scrub: 1,
        },
      }
    );

    const cards = cardsRef.current.children;
    Array.from(cards).forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32 px-6 overflow-x-clip"
    >
      <div className="max-w-5xl mx-auto">
        <SectionReveal className="mb-20">
          <div className="font-mono-label mb-4">§ 01 — Career Record</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-warm leading-[1.05] mb-4 tracking-tight">
            Eighteen years <span className="font-display-italic text-accent-soft">in motion</span>
          </h2>
          <p className="max-w-xl text-text-secondary leading-relaxed">
            Bioprocess floors to AI strategy — a record of moves between
            roles, companies, and eras of biopharma.
          </p>
        </SectionReveal>

        <div className="relative md:pl-0">
          {/* Vertical rail aligned to the 1px rail column of each article's grid
              (date col 8rem + gap-x-10 split = 8rem + 1.25rem = 9.25rem to rail start) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-0 bottom-0 w-px timeline-rail origin-top"
            style={{ left: "calc(8rem + 1.25rem)" }}
          />

          <div ref={cardsRef} className="space-y-14 md:space-y-20">
            {stints.map((stint, i) => (
              <TimelineCard key={`${stint.company}-${i}`} stint={stint} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
