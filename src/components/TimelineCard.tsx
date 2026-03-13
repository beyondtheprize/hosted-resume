"use client";

import type { Experience } from "@/lib/resume-data";

export default function TimelineCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start gap-6 md:gap-10 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Content card */}
      <div
        className={`flex-1 ${
          isLeft ? "md:text-right" : "md:text-left"
        } text-left`}
      >
        <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 card-glow transition-all duration-300 hover:border-accent/30">
          <div className={`flex flex-col ${isLeft ? "md:items-end" : "md:items-start"} items-start gap-1 mb-3`}>
            <span className="text-xs font-medium text-accent tracking-wider uppercase">
              {experience.dateRange}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
              {experience.title}
            </h3>
            <p className="text-sm text-text-secondary">
              {experience.company} &middot; {experience.location}
            </p>
          </div>

          {experience.bullets.length > 0 && (
            <ul className={`space-y-2 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
              {experience.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm text-text-secondary leading-relaxed"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Timeline dot - visible on md+ only, mobile uses a simpler layout */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <div className="w-3.5 h-3.5 rounded-full bg-accent glow" />
      </div>

      {/* Spacer for the other side (desktop only) */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}
