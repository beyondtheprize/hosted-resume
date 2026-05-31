import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactBar from "@/components/ContactBar";
import ParticleBackground from "@/components/ParticleBackground";
import DachshundBiker from "@/components/DachshundBiker";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Particle background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Atmospheric layers — fine grid + vignette */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid opacity-60" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-vignette" />

      {/* Soft fade so particles recede behind page content */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-bg/40 to-bg" />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <div className="relative bg-bg/85 backdrop-blur-[2px]">
          <ExperienceSection />
          <EducationSection />
          <ContactBar />
        </div>
      </div>

      {/* Dachshund on bike — rides across as you scroll */}
      <DachshundBiker />
    </main>
  );
}
