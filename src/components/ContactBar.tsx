"use client";

import { contactInfo } from "@/lib/resume-data";
import SectionReveal from "./SectionReveal";

export default function ContactBar() {
  return (
    <footer
      id="contact"
      className="relative py-24 sm:py-32 px-6 border-t border-border-soft"
    >
      <div className="max-w-3xl mx-auto text-center">
        <SectionReveal>
          <div className="font-mono-label mb-4">§ 03 — Correspondence</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-warm leading-[1.05] tracking-tight mb-6">
            Let&rsquo;s build <span className="font-display-italic text-accent-soft">something</span>.
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-lg mx-auto mb-12">
            Open to conversations on AI strategy, digital transformation in
            regulated science, and platform-scale R&amp;D.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-accent text-bg font-medium text-sm tracking-tight hover:bg-accent-soft transition-all duration-300 glow"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
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
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-surface/80 backdrop-blur border border-accent/30 text-accent font-medium text-sm tracking-tight hover:bg-accent/10 hover:border-accent/60 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </SectionReveal>

        <div className="flex items-center justify-center gap-4 font-mono-label">
          <div className="w-8 h-px bg-text-muted/30" />
          <span>© {new Date().getFullYear()} M.G.S.</span>
          <div className="w-8 h-px bg-text-muted/30" />
        </div>
      </div>
    </footer>
  );
}
