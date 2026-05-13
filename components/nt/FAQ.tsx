"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Como faço para reservar?",
    a: "Reserve diretamente pelo WhatsApp. Confirmamos data, horário e detalhes do roteiro em poucos minutos.",
  },
  {
    q: "Quantas pessoas cabem na lancha?",
    a: "Acomodamos até 10 pessoas com conforto. Para grupos maiores, organizamos embarcações adicionais.",
  },
  {
    q: "O que está incluso?",
    a: "Combustível, piloto, coletes, cooler com gelo, som premium e boia rebocável. Bebidas e fotos profissionais opcionais.",
  },
  {
    q: "Funciona em dias nublados?",
    a: "Sim. Em casos de chuva intensa ou alerta meteorológico, remarcamos sem custo.",
  },
  {
    q: "Tem ponto de partida fixo?",
    a: "Saímos de píer próprio em Capitólio. Enviamos a localização exata após a confirmação.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="relative py-32 md:py-40 px-6"
    >
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
