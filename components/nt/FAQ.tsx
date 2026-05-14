"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Como faço para reservar?",
    a: "A reserva é feita diretamente pelo WhatsApp. Após a confirmação, alinhamos data, horário e detalhes do passeio.",
  },
  {
    q: "Quantas pessoas cabem na lancha?",
    a: "A embarcação comporta até 12 pessoas com conforto e segurança.",
  },
  {
    q: "O que está incluso?",
    a: "O passeio inclui combustível, piloto certificado, coletes higienizados, som JBL, churrasqueira, starlink e área gourmet a bordo.",
  },
  {
    q: "Posso levar meu pet?",
    a: "Sim. A NT Passeios Náuticos é pet friendly e seu pet também pode aproveitar o passeio.",
  },
  {
    q: "O passeio acontece em dias nublados?",
    a: "Sim. A embarcação possui área cabinada para maior conforto durante o passeio.",
  },
  {
    q: "Qual é o ponto de saída?",
    a: "As saídas acontecem pelo Porto Marina Escarpas, em Capitólio/MG.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
              — FAQ
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-ice text-balance">
              Tudo o que você{" "}
              <span className="italic text-gold">quer saber.</span>
            </h2>
          </div>
        </Reveal>
        <div className="divide-y divide-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-8 flex items-start gap-6 group"
                >
                  <span className="font-mono text-xs text-gold/70 mt-2">
                    0{i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="font-display text-2xl md:text-3xl text-ice group-hover:text-gold transition-colors">
                      {f.q}
                    </span>
                    <motion.span
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? 16 : 0,
                      }}
                      className="block overflow-hidden text-muted-foreground font-light leading-relaxed"
                    >
                      {f.a}
                    </motion.span>
                  </span>
                  <span className="mt-2 w-9 h-9 rounded-full border border-border group-hover:border-gold flex items-center justify-center text-ice group-hover:text-gold transition-all shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
