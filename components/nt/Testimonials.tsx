"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    n: "Marina S.",
    c: "São Paulo · SP",
    q: "Foi o ponto alto da nossa viagem. Detalhe impressionante em cada momento, do recebimento ao pôr do sol cinematográfico.",
  },
  {
    n: "Rafael M.",
    c: "Belo Horizonte · MG",
    q: "Levei a família e amigos. Lancha impecável, capitão atencioso e roteiro que mostrou Capitólio como nunca tínhamos visto.",
  },
  {
    n: "Camila & João",
    c: "Rio de Janeiro · RJ",
    q: "Pedimos o sunset privativo e foi mágico. Sentimos um luxo silencioso, sem perder a aventura.",
  },
  {
    n: "Ana P.",
    c: "Curitiba · PR",
    q: "Profissionalismo nota dez. Volto com certeza — e dessa vez por dois dias inteiros.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section className="relative py-32 md:py-40 px-6 bg-[oklch(0.16_0.04_245)]">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <Quote className="w-10 h-10 text-gold mx-auto mb-8" />
        </Reveal>
        <Reveal delay={0.1}>
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl text-ice leading-[1.2] text-balance italic"
          >
            &ldquo;{TESTIMONIALS[i].q}&rdquo;
          </motion.blockquote>
          <div className="mt-10">
            <div className="font-display text-xl text-gold">
              {TESTIMONIALS[i].n}
            </div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-ice/60 mt-1">
              {TESTIMONIALS[i].c}
            </div>
          </div>
        </Reveal>
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() =>
              setI((i + TESTIMONIALS.length - 1) % TESTIMONIALS.length)
            }
            className="w-11 h-11 rounded-full border border-border hover:border-gold text-ice hover:text-gold transition-colors flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Depoimento ${k + 1} de ${TESTIMONIALS.length} - ${t.n}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-10 bg-gold" : "w-2 bg-ice/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((i + 1) % TESTIMONIALS.length)}
            className="w-11 h-11 rounded-full border border-border hover:border-gold text-ice hover:text-gold transition-colors flex items-center justify-center"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
