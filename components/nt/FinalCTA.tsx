"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP =
  "https://wa.me/5531997279740?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20passeios%20com%20a%20NT";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section
      ref={ref}
      aria-label="Chamada final para reservar passeio náutico NT Passeios Náuticos"
      className="relative h-[90vh] min-h-150 w-full overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
        <Image
          src="/sunset.webp"
          alt="Pôr do sol em Capitólio"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/40" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
            — Sua Próxima História
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-8xl text-ice leading-[0.95] max-w-5xl text-balance">
            O pôr do sol já está{" "}
            <span className="italic text-gold">te esperando.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-xl text-ice/75 text-lg font-light">
            Reserve o seu passeio e viva Capitólio como ele merece ser vivido.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-5 text-(--gold-foreground) font-medium text-lg glow-gold-hover"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
