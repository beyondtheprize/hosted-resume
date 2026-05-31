"use client";

import { education } from "@/lib/resume-data";
import SectionReveal from "./SectionReveal";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-6 border-t border-border-soft">
      <div className="max-w-5xl mx-auto">
        <SectionReveal className="mb-16">
          <div className="font-mono-label mb-4">§ 02 — Foundation</div>
          <h2 className="font-display text-4xl sm:text-5xl text-warm leading-[1.05] tracking-tight">
            Education
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <SectionReveal key={i} delay={i * 0.15}>
              <div className="stint-card rounded-2xl p-7 h-full transition-all duration-300">
                <div className="font-mono-label mb-4">Class of {edu.year}</div>
                <h3 className="font-display text-xl sm:text-2xl text-warm leading-snug mb-2">
                  {edu.school}
                </h3>
                <p className="text-text-primary text-[0.95rem] leading-snug mb-1">
                  {edu.degree}
                </p>
                <p className="font-mono text-xs text-text-muted tracking-wide mb-4">
                  {edu.location}
                </p>
                {edu.honors && (
                  <p className="text-sm text-accent-soft/90 leading-relaxed border-t border-border-soft pt-4">
                    {edu.honors}
                  </p>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
