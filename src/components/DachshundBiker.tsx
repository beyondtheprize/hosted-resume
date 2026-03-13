"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DachshundBiker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Perpetual animations - wheels, pedals, tail, ears, body bob
      gsap.to("#front-wheel, #rear-wheel", {
        rotation: 360,
        repeat: -1,
        duration: 0.8,
        ease: "none",
        transformOrigin: "center center",
      });

      gsap.to("#pedal-group", {
        rotation: 360,
        repeat: -1,
        duration: 0.8,
        ease: "none",
        transformOrigin: "center center",
      });

      gsap.to("#tail", {
        rotation: 15,
        yoyo: true,
        repeat: -1,
        duration: 0.3,
        ease: "sine.inOut",
        transformOrigin: "0% 100%",
      });

      gsap.to("#ear-left", {
        rotation: -12,
        yoyo: true,
        repeat: -1,
        duration: 0.25,
        ease: "sine.inOut",
        transformOrigin: "100% 100%",
      });

      gsap.to("#ear-right", {
        rotation: -10,
        yoyo: true,
        repeat: -1,
        duration: 0.3,
        ease: "sine.inOut",
        transformOrigin: "100% 100%",
      });

      // Subtle body bob
      gsap.to("#dog-body", {
        y: -1.5,
        yoyo: true,
        repeat: -1,
        duration: 0.4,
        ease: "sine.inOut",
      });

      // Leg pedaling motion
      gsap.to("#rear-leg-left", {
        rotation: 15,
        yoyo: true,
        repeat: -1,
        duration: 0.4,
        ease: "sine.inOut",
        transformOrigin: "50% 0%",
      });

      gsap.to("#rear-leg-right", {
        rotation: -15,
        yoyo: true,
        repeat: -1,
        duration: 0.4,
        ease: "sine.inOut",
        transformOrigin: "50% 0%",
        delay: 0.2,
      });

      // Entrance animation: ride in from left
      gsap.fromTo(
        containerRef.current,
        { x: "-300px" },
        {
          x: "0px",
          duration: 2.5,
          delay: 1.5,
          ease: "power2.out",
        }
      );

      // Scroll-linked horizontal movement
      gsap.to(containerRef.current, {
        x: () => window.innerWidth + 100,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "10% top",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scale = isMobile ? 0.55 : 0.85;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 left-0 z-50 pointer-events-none"
      style={{
        transform: "translateX(-300px)",
        opacity: isMobile ? 0.7 : 1,
      }}
    >
      <svg
        width={220 * scale}
        height={140 * scale}
        viewBox="0 0 220 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rear Wheel */}
        <g id="rear-wheel">
          <circle cx="55" cy="105" r="28" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
          <circle cx="55" cy="105" r="25" stroke="#38bdf8" strokeWidth="0.5" opacity="0.3" fill="none" />
          {/* Spokes */}
          <line x1="55" y1="77" x2="55" y2="133" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
          <line x1="27" y1="105" x2="83" y2="105" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
          <line x1="35" y1="85" x2="75" y2="125" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
          <line x1="75" y1="85" x2="35" y2="125" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
          <circle cx="55" cy="105" r="3" fill="#38bdf8" />
        </g>

        {/* Front Wheel */}
        <g id="front-wheel">
          <circle cx="165" cy="105" r="28" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
          <circle cx="165" cy="105" r="25" stroke="#38bdf8" strokeWidth="0.5" opacity="0.3" fill="none" />
          {/* Spokes */}
          <line x1="165" y1="77" x2="165" y2="133" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
          <line x1="137" y1="105" x2="193" y2="105" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
          <line x1="145" y1="85" x2="185" y2="125" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
          <line x1="185" y1="85" x2="145" y2="125" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4" />
          <circle cx="165" cy="105" r="3" fill="#38bdf8" />
        </g>

        {/* Bike Frame - sleek aero road bike */}
        <g id="bike-frame">
          {/* Chainstay */}
          <line x1="55" y1="105" x2="100" y2="85" stroke="#a1a1aa" strokeWidth="2" />
          {/* Seat tube */}
          <line x1="100" y1="85" x2="95" y2="55" stroke="#a1a1aa" strokeWidth="2.5" />
          {/* Top tube */}
          <line x1="95" y1="55" x2="150" y2="58" stroke="#a1a1aa" strokeWidth="2" />
          {/* Down tube */}
          <line x1="100" y1="85" x2="155" y2="72" stroke="#a1a1aa" strokeWidth="2.5" />
          {/* Head tube */}
          <line x1="150" y1="58" x2="155" y2="72" stroke="#a1a1aa" strokeWidth="3" />
          {/* Fork */}
          <line x1="155" y1="72" x2="165" y2="105" stroke="#a1a1aa" strokeWidth="2" />
          {/* Seatstay */}
          <line x1="55" y1="105" x2="95" y2="55" stroke="#a1a1aa" strokeWidth="1.5" />
          {/* Seat post */}
          <line x1="95" y1="55" x2="93" y2="45" stroke="#a1a1aa" strokeWidth="2" />
          {/* Saddle */}
          <ellipse cx="93" cy="43" rx="10" ry="3" fill="#a1a1aa" />
          {/* Handlebars - drop bars */}
          <path
            d="M148 55 Q155 50 158 55 Q160 60 155 63"
            stroke="#a1a1aa"
            strokeWidth="2"
            fill="none"
          />
          {/* Stem */}
          <line x1="150" y1="58" x2="148" y2="55" stroke="#a1a1aa" strokeWidth="2" />
        </g>

        {/* Pedals / Crankset */}
        <g id="pedal-group" style={{ transformOrigin: "100px 85px" }}>
          <line x1="100" y1="85" x2="100" y2="97" stroke="#a1a1aa" strokeWidth="2" />
          <line x1="100" y1="85" x2="100" y2="73" stroke="#a1a1aa" strokeWidth="2" />
          <rect x="96" y="95" width="8" height="3" rx="1" fill="#a1a1aa" />
          <rect x="96" y="71" width="8" height="3" rx="1" fill="#a1a1aa" />
        </g>

        {/* Chain ring */}
        <circle cx="100" cy="85" r="10" stroke="#a1a1aa" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Dachshund */}
        <g id="dog-body">
          {/* Body - long dachshund torso */}
          <ellipse cx="115" cy="38" rx="28" ry="10" fill="#8B6914" />
          {/* Belly */}
          <ellipse cx="115" cy="42" rx="24" ry="6" fill="#A67C2E" />

          {/* Rear legs */}
          <g id="rear-leg-left">
            <path d="M92 44 L88 60 L92 60" stroke="#8B6914" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
          <g id="rear-leg-right">
            <path d="M96 44 L92 60 L96 60" stroke="#7A5C10" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>

          {/* Front legs (on handlebars) */}
          <path d="M136 44 L148 54" stroke="#8B6914" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M133 44 L145 56" stroke="#7A5C10" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Tail */}
          <g id="tail">
            <path
              d="M87 32 Q80 22 78 18"
              stroke="#8B6914"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Head */}
          <g id="head">
            <ellipse cx="148" cy="30" rx="10" ry="9" fill="#8B6914" />
            {/* Snout */}
            <ellipse cx="156" cy="33" rx="7" ry="5" fill="#A67C2E" />
            {/* Nose */}
            <ellipse cx="161" cy="32" rx="2.5" ry="2" fill="#2a1a00" />
            {/* Eye */}
            <circle cx="151" cy="28" r="2.5" fill="#1a1a2e" />
            <circle cx="151.8" cy="27.5" r="0.8" fill="white" />
            {/* Mouth */}
            <path d="M157 35 Q159 37 161 35" stroke="#2a1a00" strokeWidth="0.8" fill="none" />

            {/* Ears */}
            <g id="ear-left">
              <ellipse cx="142" cy="22" rx="5" ry="8" fill="#7A5C10" transform="rotate(-15, 142, 22)" />
            </g>
            <g id="ear-right">
              <ellipse cx="148" cy="20" rx="4.5" ry="7.5" fill="#6B4F0E" transform="rotate(-5, 148, 20)" />
            </g>
          </g>

          {/* Cycling helmet */}
          <g id="helmet">
            <path
              d="M138 22 Q148 12 158 22"
              fill="#38bdf8"
              opacity="0.9"
            />
            <path
              d="M138 22 Q148 18 158 22"
              fill="#2a9fd6"
            />
            {/* Helmet vent lines */}
            <line x1="144" y1="19" x2="146" y2="16" stroke="#1a8abf" strokeWidth="0.5" />
            <line x1="148" y1="18" x2="149" y2="15" stroke="#1a8abf" strokeWidth="0.5" />
            <line x1="152" y1="19" x2="153" y2="16" stroke="#1a8abf" strokeWidth="0.5" />
          </g>
        </g>

        {/* Speed lines */}
        <g opacity="0.3">
          <line x1="5" y1="35" x2="25" y2="35" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 5">
            <animate attributeName="x1" values="5;-15;5" dur="1s" repeatCount="indefinite" />
            <animate attributeName="x2" values="25;5;25" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="10" y1="45" x2="35" y2="45" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 6">
            <animate attributeName="x1" values="10;-10;10" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="x2" values="35;15;35" dur="1.2s" repeatCount="indefinite" />
          </line>
          <line x1="8" y1="55" x2="28" y2="55" stroke="#38bdf8" strokeWidth="0.6" strokeDasharray="2 4">
            <animate attributeName="x1" values="8;-12;8" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="x2" values="28;8;28" dur="0.9s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>
    </div>
  );
}
