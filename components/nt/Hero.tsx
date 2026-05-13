"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Anchor,
  MessageCircle,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Compass } from "./Compass";

const WHATSAPP =
  "https://wa.me/5535999999999?text=Olá!%20Quero%20reservar%20um%20passeio%20com%20a%20NT.";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[700px] w-full overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/hero-canyons.jpg"
          alt="Cânions de Capitólio ao pôr do sol vistos do alto, com lancha cruzando águas turquesa"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.04_245/0.4)] via-[oklch(0.10_0.04_245/0.3)] to-[oklch(0.10_0.04_245/0.95)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.04_245/0.6)] via-transparent to-transparent" />
      </motion.div>

      <div className="absolute top-1/2 right-[-120px] -translate-y-1/2 w-[640px] h-[640px] text-gold opacity-[0.07] pointer-events-none hidden md:block">
        <Compass className="w-full h-full animate-compass" />
      </div>

      <div className="absolute top-32 right-8 hidden md:flex items-center gap-3 font-mono text-[11px] text-ice/60 tracking-widest">
        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        20°36′53″S · 46°02′53″W
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col px-6"
      >
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-7xl pb-24 md:pb-32">
          <div className="hidden md:block h-[132px]" />
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8 glass-light rounded-full px-4 py-2">
              <Anchor className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-ice/80">
                Capitólio · Minas Gerais
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] text-balance text-ice max-w-5xl">
              Viva Capitólio
              <br />
              pelo melhor{" "}
              <span className="italic text-gold">ângulo.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-ice/75 font-light leading-relaxed">
              Passeios náuticos exclusivos pela Represa de Furnas — entre
              cânions monumentais, águas cristalinas e pôr do sol
              cinematográfico.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-[var(--gold-foreground)] font-medium glow-gold-hover"
              >
                <MessageCircle className="w-5 h-5" />
                Reservar Experiência
                <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
              </a>
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ice/80 hover:text-gold transition-colors"
              >
                Conhecer a experiência
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.25em] text-ice/55">
              <span className="flex items-center gap-2">
                <Star className="w-3 h-3 text-gold" /> Avaliação 5.0
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-gold" /> Piloto
                Certificado
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-gold" /> Mais de 1200
                passeios
              </span>
            </div>
          </Reveal>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-ice/50">
          Role
        </span>
      </div>
    </section>
  );
}
