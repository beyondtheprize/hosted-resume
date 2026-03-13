"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/resume-data";
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

    // Animate the timeline line drawing
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      }
    );

    // Animate cards
    const cards = cardsRef.current.children;
    Array.from(cards).forEach((card, i) => {
      const direction = i % 2 === 0 ? -60 : 60;
      gsap.fromTo(
        card,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
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
    <section ref={sectionRef} id="experience" className="py-20 sm:py-28 px-6 overflow-x-clip">
      <div className="max-w-5xl mx-auto">
        <SectionReveal className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
            Experience
          </h2>
          <p className="text-text-secondary">17+ years driving digital transformation in biopharma</p>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line (desktop only) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-line origin-top"
          />

          {/* Cards */}
          <div ref={cardsRef} className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <TimelineCard key={i} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
