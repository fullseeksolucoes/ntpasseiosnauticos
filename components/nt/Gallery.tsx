"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const GALLERY = [
  "/galeria1.webp",
  "/galeria2.webp",
  "/galeria3.webp",
  "/galeria4.webp",
  "/galeria5.webp",
  "/galeria6.webp",
  "/galeria7.webp",
  "/galeria8.webp",
  "/galeria9.webp",
  "/galeria10.webp",
  "/galeria11.webp",
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section
      id="galeria"
      aria-label="Galeria de fotos dos passeios NT Passeios Náuticos em Capitólio"
      className="relative py-32 md:py-40 px-6 bg-[oklch(0.16_0.04_245)]"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
              — Galeria
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-ice text-balance">
              Momentos <span className="italic text-gold">que ficam.</span>
            </h2>
          </div>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
          {GALLERY.map((src, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.08}
              className="mb-5 break-inside-avoid"
            >
              <button
                // onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-deep"
              >
                <Image
                  src={src}
                  alt={`Galeria de fotos NT Passeios Náuticos - Passeio em Capitólio ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-ice opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="font-mono text-[10px] tracking-widest">
                    FRAME · {String(i + 1).padStart(2, "0")}
                  </span>
                  <Camera className="w-4 h-4 text-gold" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-ice hover:text-gold"
            onClick={() => setOpen(null)}
          >
            <X />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-ice hover:text-gold"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + GALLERY.length - 1) % GALLERY.length);
            }}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-ice hover:text-gold"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % GALLERY.length);
            }}
          >
            <ChevronRight />
          </button>
          <Image
            src={GALLERY[open]}
            alt="Detalhe"
            width={1200}
            height={900}
            className="max-h-[88vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )} */}
    </section>
  );
}
