"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Compass } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP =
  "https://wa.me/5531997279740?text=Olá!%20Quero%20reservar%20um%20passeio%20com%20a%20NT.";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative py-32 md:py-40 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center relative">
        <Reveal className="lg:col-span-5 order-2 lg:order-1">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
            — A Experiência NT
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ice leading-[1.05] text-balance">
            Capitólio vivido da{" "}
            <span className="italic text-gold"> forma certa.</span>
          </h2>
          <p className="mt-8 text-lg text-ice/70 leading-relaxed font-light">
            A FS YACHTS 290 Concept foi preparada para grupos de até 12 pessoas,
            com som JBL, área gourmet, churrasqueira, starlink e espaço
            confortável para aproveitar no seu ritmo. Os roteiros passam por
            cânions, cachoeiras, paradas para banho e pontos conhecidos da
            região.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { k: "Capacidade", v: "Até 12 pessoas" },
              { k: "Duração", v: "Passeios de 3h a 7h" },
              { k: "Conforto", v: "Som & churrasqueira" },
              { k: "Saída", v: "Porto Marina Escarpas, Capitólio/MG" },
            ].map((d) => (
              <div key={d.k} className="border-l border-gold/40 pl-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80">
                  {d.k}
                </div>
                <div className="font-display text-xl text-ice mt-1">{d.v}</div>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            aria-label="Reserve sua data pelo WhatsApp"
            className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-ice hover:text-gold group"
          >
            <span className="w-10 h-px bg-gold transition-all duration-500 group-hover:w-16" />
            Reserve a sua data
          </a>
        </Reveal>

        <Reveal
          delay={0.2}
          className="lg:col-span-7 order-1 lg:order-2 relative"
        >
          <div className="relative aspect-4/5 md:aspect-5/6 rounded-3xl overflow-hidden shadow-elegant">
            <Image
              src="/boat.webp"
              alt="Lancha premium NT Passeios Náuticos parada em águas calmas de Furnas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 w-64 glass rounded-2xl p-5 shadow-deep animate-wave-float"
          >
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <Star className="w-4 h-4 fill-gold text-gold" />
              <Star className="w-4 h-4 fill-gold text-gold" />
              <Star className="w-4 h-4 fill-gold text-gold" />
              <Star className="w-4 h-4 fill-gold text-gold" />
            </div>
            <p className="text-sm text-ice/85 font-light italic">
              &ldquo;A melhor experiência em Capitólio. Inesquecível.&rdquo;
            </p>
            <div className="text-[11px] uppercase tracking-widest text-gold mt-2">
              Marina S. · São Paulo
            </div>
          </motion.div>

          <div className="absolute -top-8 -right-8 w-40 h-40 text-gold/30 hidden md:block">
            <Compass className="w-full h-full animate-compass" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
