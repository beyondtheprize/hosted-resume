"use client";

import { education } from "@/lib/resume-data";
import SectionReveal from "./SectionReveal";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
            Education
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <SectionReveal key={i} delay={i * 0.15}>
              <div className="bg-surface border border-border rounded-xl p-6 card-glow transition-all duration-300 hover:border-accent/30 h-full">
                <span className="text-xs font-medium text-accent tracking-wider uppercase">
                  {edu.year}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mt-2 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-text-secondary">{edu.school}</p>
                <p className="text-sm text-text-secondary">{edu.location}</p>
                {edu.honors && (
                  <p className="text-sm text-accent/80 mt-3">{edu.honors}</p>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
