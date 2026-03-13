"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        color: { value: "#38bdf8" },
        links: {
          color: "#38bdf8",
          distance: 150,
          enable: true,
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none" as const,
          outModes: { default: "out" as const },
        },
        number: {
          value: 50,
          density: { enable: true },
        },
        opacity: {
          value: { min: 0.05, max: 0.2 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: true,
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 25 },
            },
          },
        },
      ],
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="particles"
      options={options}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
