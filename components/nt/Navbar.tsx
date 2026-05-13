"use client";

import { useEffect, useState } from "react";
import { Anchor, MessageCircle, Menu, X } from "lucide-react";

const links = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#roteiros", label: "Roteiros" },
  { href: "#galeria", label: "Galeria" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#piloto", label: "Piloto" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-deep" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <Anchor className="w-4 h-4 text-[var(--gold-foreground)]" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wide text-ice">NT</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/90 -mt-0.5">Passeios</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.18em] text-ice/70 hover:text-gold transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/5535999999999"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-[var(--gold-foreground)] glow-gold-hover"
          >
            <MessageCircle className="w-4 h-4" />
            Reservar
          </a>

          <button
            className="lg:hidden text-ice"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-ice/80 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5535999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-medium text-[var(--gold-foreground)]"
            >
              <MessageCircle className="w-4 h-4" /> Reservar pelo WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
