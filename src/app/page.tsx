import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactBar from "@/components/ContactBar";
import ParticleBackground from "@/components/ParticleBackground";
import DachshundBiker from "@/components/DachshundBiker";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Particle background - hero area */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Gradient overlay to fade particles behind content */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-bg" />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <div className="bg-bg/80 backdrop-blur-sm">
          <ExperienceSection />
          <EducationSection />
          <ContactBar />
        </div>
      </div>

      {/* Dachshund on bike - rides across as you scroll */}
      <DachshundBiker />
    </main>
  );
}
