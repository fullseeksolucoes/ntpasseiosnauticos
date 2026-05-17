import { Navbar } from "@/components/nt/Navbar";
import { Hero } from "@/components/nt/Hero";
import { Experience } from "@/components/nt/Experience";
import { Gallery } from "@/components/nt/Gallery";
import { Testimonials } from "@/components/nt/Testimonials";
import { FAQ } from "@/components/nt/FAQ";
import { FinalCTA } from "@/components/nt/FinalCTA";
import {
  Benefits,
  Roteiros,
  Timeline,
  Differentials,
  Stats,
  Tipos,
  Inclusos,
  Pilot,
  Footer,
  FloatingWhatsApp,
} from "@/components/nt/Sections";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Experience />
      <Roteiros />
      <Gallery />
      <Timeline />
      <Differentials />
      <Stats />
      <Tipos />
      <Inclusos />
      <Pilot />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
