"use client";

import type { Stint } from "@/lib/resume-data";

export default function TimelineCard({ stint }: { stint: Stint }) {
  const isPresent = stint.span.toLowerCase().includes("present");

  return (
    <article className="relative md:grid md:grid-cols-[8rem_1px_1fr] md:gap-x-10">
      {/* Date column (desktop) */}
      <div className="hidden md:flex justify-end pt-7 pr-1">
        <div className="text-right">
          <div className="font-mono-label leading-tight">{stint.span}</div>
          <div className="font-mono text-[0.65rem] text-text-muted/60 mt-1 tracking-wider">
            {stint.location}
          </div>
        </div>
      </div>

      {/* Rail + dot (desktop) — dot sits centered on the 1px rail column */}
      <div className="hidden md:block relative">
        <div className="absolute top-8 left-1/2 w-3 h-3 rounded-full timeline-dot -translate-x-1/2" />
      </div>

      {/* Card */}
      <div className="relative">
        {/* Mobile date strip */}
        <div className="md:hidden flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full timeline-dot" />
          <span className="font-mono-label">
            {stint.span} · {stint.location}
          </span>
        </div>

        <div className="stint-card rounded-2xl p-6 sm:p-8 transition-all duration-300">
          {/* Company anchor */}
          <header className="mb-6">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-display text-2xl sm:text-[1.85rem] text-warm leading-tight">
                {stint.company}
              </h3>
              {isPresent && (
                <span className="inline-flex items-center gap-2 font-mono-label text-accent/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                  Current
                </span>
              )}
            </div>
          </header>

          {/* Titles ladder */}
          <ol className="mb-6 space-y-3">
            {stint.titles.map((t, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 pb-3 last:pb-0 border-b border-border-soft last:border-b-0"
              >
                <span className="text-text-primary text-base sm:text-[1.05rem] font-medium leading-snug">
                  {t.title}
                </span>
                <span className="font-mono text-xs text-text-muted whitespace-nowrap tracking-wide">
                  {t.dateRange}
                </span>
              </li>
            ))}
          </ol>

          {/* Bullets */}
          {stint.bullets.length > 0 && (
            <ul className="stint-bullets space-y-3">
              {stint.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-[0.95rem] text-text-secondary leading-[1.65]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
