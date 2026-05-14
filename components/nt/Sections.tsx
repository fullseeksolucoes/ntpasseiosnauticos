import Image from "next/image";
import Link from "next/link";
import {
  Sailboat,
  ShieldCheck,
  Sun,
  Compass as CompassIcon,
  MapPin,
  Wine,
  Music2,
  LifeBuoy,
  Snowflake,
  Fuel,
  Camera,
  Phone,
  Waves,
  Music4,
  PawPrint,
  Mail,
} from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Reveal, CountUp } from "./Reveal";
import { WaveDivider } from "./Compass";

/* ---------------- BENEFITS ---------------- */

export function Benefits() {
  const items = [
    {
      icon: Sailboat,
      label: "Lancha Premium",
      sub: "Conforto, sofisticação e experiência completa",
    },
    {
      icon: ShieldCheck,
      label: "Piloto Certificado",
      sub: "Piloto certificado pela Marinha do Brasil",
    },
    {
      icon: Sun,
      label: "Roteiros Exclusivos",
      sub: "Cânions, águas cristalinas e cachoeiras",
    },
    {
      icon: CompassIcon,
      label: "Experiência Sob Medida",
      sub: "Personalizada para seu grupo",
    },
  ];
  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.08} className="bg-background">
            <div className="group p-8 md:p-10 h-full transition-all duration-500 hover:bg-card">
              <it.icon className="w-7 h-7 text-gold mb-6 transition-transform duration-500 group-hover:-translate-y-1" />
              <div className="font-display text-xl text-ice mb-1">
                {it.label}
              </div>
              <div className="text-sm text-muted-foreground">{it.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ROTEIROS ---------------- */

const ROTEIROS = [
  {
    title: "Cachoeira Lagoa Azul",
    img: "/cachoeira-lagoa-azul.webp",
    tag: "ÁGUAS CRISTALINAS",
    desc: "Águas cristalinas, paredões naturais e uma das paisagens mais conhecidas da região.",
  },
  {
    title: "Cânions de Capitólio",
    img: "/canyons.webp",
    tag: "CARTÃO-POSTAL",
    desc: "Os cânions que marcaram Capitólio, vistos de perto pelas águas da represa.",
  },
  {
    title: "Vale dos Tucanos",
    img: "/tucanos.webp",
    tag: "NATUREZA",
    desc: "Trecho mais tranquilo da rota, cercado pela natureza e formações rochosas.",
  },
  {
    title: "Cascatinha",
    img: "/cascatinha.webp",
    tag: "PARADA PARA BANHO",
    desc: "Parada para banho em meio às quedas d’água e vegetação da região.",
  },
  {
    title: "Cachoeira da Ilha",
    img: "/cachoeira-ilha.webp",
    tag: "PARADA PARA BANHO",
    desc: "Parada para banho em meio às quedas d’água e vegetação da região.",
  },
  {
    title: "Bar Flutuante",
    img: "/bar.webp",
    tag: "PÔR DO SOL",
    desc: "Ponto de pausa para aproveitar Furnas com música, bebidas e vista para a represa.",
  },
];

function RoteiroCard({
  title,
  img,
  tag,
  desc,
  large = false,
}: {
  title: string;
  img: string;
  tag: string;
  desc: string;
  large?: boolean;
}) {
  const idx = ROTEIROS.findIndex((r) => r.title === title);
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl shadow-deep ${
        large ? "h-160" : "h-75"
      }`}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-1500 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-tr from-(--deep)/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="absolute top-6 left-6 inline-flex items-center gap-2 glass-light rounded-full px-3 py-1.5">
        <span className="w-1 h-1 rounded-full bg-gold" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-ice">
          {tag}
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-7">
        <div className="font-mono text-[10px] text-gold/70 tracking-widest mb-2">
          PARADA · {String(idx + 1).padStart(2, "0")}
        </div>
        <h3
          className={`font-display text-ice ${
            large ? "text-5xl md:text-6xl" : "text-2xl md:text-3xl"
          }`}
        >
          {title}
        </h3>
        <p className="mt-3 text-sm text-ice/70 max-w-md font-light leading-relaxed">
          {desc}
        </p>
        <div className="mt-4 h-px w-12 bg-gold transition-all duration-500 group-hover:w-24" />
      </div>
    </div>
  );
}

export function Roteiros() {
  return (
    <section id="roteiros" className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
                — Roteiros & Destinos
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-ice leading-[1.05] text-balance max-w-3xl">
                Seis paradas. Uma{" "}
                <span className="italic text-gold">só rota</span> inesquecível.
              </h2>
            </div>
            <div className="font-mono text-xs text-ice/40 tracking-widest hidden md:block">
              ROTA 01 / FURNAS
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {ROTEIROS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 0.07}
              className={
                i === 0
                  ? "md:col-span-4 md:row-span-2"
                  : i <= 2
                    ? "md:col-span-2"
                    : "md:col-span-2"
              }
            >
              <RoteiroCard {...r} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TIMELINE ---------------- */

const STEPS = [
  {
    t: "Reserva",
    d: "Entre em contato pelo WhatsApp para escolher a data, duração e roteiro do passeio.",
  },
  {
    t: "Embarque",
    d: "A saída acontece pelo Porto Marina Escarpas, em Capitólio/MG.",
  },
  {
    t: "Passeio",
    d: "O roteiro passa por cânions, cachoeiras, paradas para banho e outros pontos de Furnas.",
  },
  {
    t: "Retorno",
    d: "Finalize o passeio aproveitando o visual da represa e o clima de Capitólio.",
  },
];

export function Timeline() {
  return (
    <section id="como-funciona" className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-20">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
              — Como Funciona
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-ice text-balance">
              A rota da sua{" "}
              <span className="italic text-gold">próxima memória.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-px">
            <svg
              className="w-full h-2"
              preserveAspectRatio="none"
              viewBox="0 0 1000 8"
            >
              <path
                d="M0 4 Q 250 -4 500 4 T 1000 4"
                stroke="var(--gold)"
                strokeOpacity="0.4"
                strokeWidth="1"
                strokeDasharray="2 6"
                fill="none"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="text-center md:text-left relative">
                  <div className="mx-auto md:mx-0 relative w-20 h-20 rounded-full bg-deep border border-gold/40 flex items-center justify-center font-display text-2xl text-gold shadow-gold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl text-ice mt-6">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DIFFERENTIALS ---------------- */

const DIFF_ITEMS = [
  {
    icon: Sailboat,
    t: "Lancha Premium",
    d: "FS YACHTS 290 Concept 2026 com espaço confortável para grupos de até 12 pessoas.",
  },
  {
    icon: ShieldCheck,
    t: "Navegação Segura",
    d: "Piloto certificado pela Marinha do Brasil, com equipamentos obrigatórios e coletes higienizados a bordo.",
  },
  {
    icon: Waves,
    t: "Jet Ski Opcional",
    d: "Moto aquática disponível como opção de locação para complementar a experiência durante o passeio.",
  },
  {
    icon: LifeBuoy,
    t: "Tapete Flutuante",
    d: "Tapete flutuante disponível para locação durante as paradas para banho.",
  },
  {
    icon: Music4,
    t: "Som & Área Gourmet",
    d: "Estrutura com som JBL, churrasqueira, starlink, geleira e espaço gourmet completo a bordo.",
  },
  {
    icon: PawPrint,
    t: "Pet Friendly",
    d: "Seu pet também pode aproveitar o passeio com conforto e segurança.",
  },
];

export function Differentials() {
  return (
    <section className="relative py-32 md:py-40 px-6 bg-[oklch(0.16_0.04_245)]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
                — Diferenciais
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-ice text-balance">
                Por que a <span className="italic text-gold">NT?</span>
              </h2>
            </div>
            <p className="text-ice/70 font-light text-lg max-w-md">
              Passeios com embarcação premium, condução profissional e estrutura
              preparada para aproveitar Capitólio com mais conforto e segurança.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFF_ITEMS.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 0.08}>
              <div className="group relative h-full p-8 rounded-3xl border border-border bg-card/50 hover:bg-card transition-all duration-500 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                    <it.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-ice">{it.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {it.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */

export function Stats() {
  const stats = [
    { n: 1200, s: "+", l: "Horas náuticas em Furnas" },
    { n: 5, s: ".0", l: "Avaliação média" },
    { n: 15, s: "+", l: "Anos de experiência" },
    { n: 100, s: "%", l: "Clientes satisfeitos" },
  ];
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/sunset.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((st, i) => (
          <Reveal key={i} delay={i * 0.1} className="text-center">
            <div className="font-display text-6xl md:text-7xl text-gold tracking-tight">
              <CountUp to={st.n} suffix={st.s} />
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-ice/70">
              {st.l}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TIPOS ---------------- */

const TIPOS = [
  {
    t: "Passeio Completo",
    d: "Roteiro de 7 horas passando pelos Cânions, Vale dos Tucanos, bar flutuante e pôr do sol em Furnas.",
    img: "/experiencia1.webp",
    time: "7 horas",
  },
  {
    t: "Cachoeira da Ilha",
    d: "Passeio de 3h a 4h com paradas para banho e roteiro passando pela Cachoeira da Ilha.",
    img: "/experiencia2.webp",
    time: "3h a 4h",
  },
  {
    t: "Combo Náutico",
    d: "Experiência combinando lancha e moto aquática durante o passeio pelas águas de Furnas.",
    img: "/experiencia3.webp",
    time: "7 horas",
  },
  {
    t: "Cachoeira Combo",
    d: "Roteiro pelas cachoeiras da região com experiência de jet ski durante o passeio.",
    img: "/experiencia4.webp",
    time: "7 horas",
  },
];

const WHATSAPP =
  "https://wa.me/5531997279740?text=Olá!%20Quero%20reservar%20um%20passeio%20com%20a%20NT.";

/* ---------------- COMPONENT ---------------- */

export function Tipos() {
  return (
    <section className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
              Tipos de Passeio
            </div>

            <h2 className="font-display text-5xl md:text-7xl text-ice text-balance">
              Passeios pelas águas de Furnas.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TIPOS.map((t, i) => (
            <Reveal key={t.t} delay={i * 0.1}>
              <div className="group relative h-130 rounded-3xl overflow-hidden shadow-deep">
                <Image
                  src={t.img}
                  alt={t.t}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-background/10" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                    Passeio · 0{i + 1}
                  </div>

                  <h3 className="font-display text-3xl text-ice">{t.t}</h3>

                  <p className="mt-3 text-ice/70 text-sm leading-relaxed">
                    {t.d}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="font-mono text-xs text-ice/50">
                      {t.time}
                    </div>

                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Reservar este passeio pelo WhatsApp"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold hover:text-ice transition-colors"
                    >
                      Reservar
                      <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INCLUSOS ---------------- */

const INCLUSOS = [
  { i: Wine, t: "Bebidas geladas" },
  { i: Music2, t: "Som Bluetooth" },
  { i: LifeBuoy, t: "Coletes salva-vidas" },
  { i: Sailboat, t: "Boia rebocável" },
  { i: Fuel, t: "Combustível incluso" },
  { i: ShieldCheck, t: "Piloto experiente" },
];

export function Inclusos() {
  return (
    <section className="relative py-32 md:py-40 px-6 bg-[oklch(0.16_0.04_245)]">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
            — A Bordo
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-ice leading-[1.05] text-balance">
            Tudo o que você precisa,{" "}
            <span className="italic text-gold">já a bordo.</span>
          </h2>
          <p className="mt-6 text-ice/70 font-light leading-relaxed">
            Da bebida gelada à playlist preferida — pensamos em cada detalhe
            para você apenas relaxar e contemplar.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
            {INCLUSOS.map((it) => (
              <div
                key={it.t}
                className="bg-background p-6 flex items-center gap-4 group hover:bg-card transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-(--gold-foreground) transition-all">
                  <it.i className="w-4 h-4" />
                </div>
                <span className="text-ice/85 text-sm">{it.t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PILOT ---------------- */

export function Pilot() {
  return (
    <section id="piloto" className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-elegant">
            <Image
              src="/piloto.webp"
              alt="Capitão da NT Passeios Náuticos"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-light rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-ice">
              Capitão
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
            — Conheça seu Capitão
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-ice leading-[1.05] text-balance">
            Quem te leva pelos cânions{" "}
            <span className="italic text-gold">faz toda a diferença.</span>
          </h2>
          <p className="mt-8 text-ice/75 text-lg font-light leading-relaxed">
            Edson Maciel é o responsável pela condução. Marinheiro profissional
            certificado pela Marinha do Brasil, realiza passeios pelas águas de
            Furnas com foco em segurança, atenção aos passageiros e uma
            navegação tranquila pelos principais pontos da região.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "15+", l: "Anos de experiência" },
              { k: "1.200+", l: "Horas náuticas" },
              { k: "MAF", l: "Certificação Marinha" },
            ].map((m) => (
              <div key={m.l} className="border-t border-gold/40 pt-4">
                <div className="font-display text-3xl text-gold">{m.k}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-ice/60 mt-1">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

export function Footer() {
  return (
    <footer className="relative px-6 pt-20 pb-10 bg-[oklch(0.13_0.04_245)] border-t border-border">
      <div className="text-gold/60 -mt-20 mb-12">
        <WaveDivider className="w-full h-12" />
      </div>
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Link href="#" aria-label="Página inicial NT Passeios Náuticos">
            <Image
              src="/logo.webp"
              alt="NT Passeios Náuticos - Passeios pela Represa de Furnas"
              width={240}
              height={80}
              className="h-20 w-auto"
            />
          </Link>
          <p className="mt-6 text-ice/65 font-light max-w-md leading-relaxed">
            Uma experiência náutica premium pela Represa de Furnas — cânions,
            cachoeiras e pôr do sol em uma jornada inesquecível.
          </p>
          <div className="mt-8 font-mono text-[11px] text-ice/40 tracking-widest">
            20°36′53″S · 46°02′53″W
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">
            Navegação
          </div>
          <ul className="space-y-3 text-ice/75 text-sm">
            <li>
              <Link href="#experiencia" className="hover:text-gold">
                A Experiência
              </Link>
            </li>
            <li>
              <Link href="#roteiros" className="hover:text-gold">
                Roteiros
              </Link>
            </li>
            <li>
              <Link href="#galeria" className="hover:text-gold">
                Galeria
              </Link>
            </li>
            <li>
              <Link href="#piloto" className="hover:text-gold">
                Piloto
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-gold">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">
            Contato
          </div>
          <ul className="space-y-3 text-ice/75 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold" /> +55 (31) 99727-9740
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold" /> ntpasseios@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gold" /> Capitólio, Minas Gerais
            </li>
            <li className="flex items-center gap-3">
              <Waves className="w-4 h-4 text-gold" /> Represa de Furnas
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="https://wa.me/5531997279740?text=Olá!%20Quero%20reservar%20um%20passeio%20com%20a%20NT."
              target="_blank"
              rel="noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-ice"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/ntpasseioscapitolio"
              target="_blank"
              rel="noreferrer"
              aria-label="Siga-nos no Instagram"
              className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-ice"
            >
              <FaInstagram className="w-4 h-4" />
            </a>

            <a
              href="https://www.tiktok.com/@ntpasseioscapitolio"
              target="_blank"
              rel="noreferrer"
              aria-label="Siga-nos no TikTok"
              className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-ice"
            >
              <FaTiktok className="w-4 h-4" />
            </a>
            <a
              href="mailto:ntpasseios@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Envie um e-mail para NT Passeios Náuticos"
              className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-ice"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-ice/40">
        <span>
          © {new Date().getFullYear()} NT Passeios Náuticos · Todos os direitos
          reservados
        </span>
        <span className="font-mono">
          Desenvolvido por{" "}
          <a
            href="https://www.fullseek.com.br/"
            target="_blank"
            rel="noreferrer"
            aria-label="Desenvolvido por FullSeek - agência de tecnologia"
            className="hover:text-gold"
          >
            FullSeek
          </a>
        </span>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */

const WHATSAPP_LINK =
  "https://wa.me/5531997279740?text=Olá!%20Quero%20reservar%20um%20passeio%20com%20a%20NT.";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full rounded-full bg-gold/40 opacity-75 animate-ping" />
        <span className="relative inline-flex w-14 h-14 rounded-full bg-gradient-gold items-center justify-center text-(--gold-foreground) shadow-gold glow-gold-hover">
          <FaWhatsapp className="w-6 h-6" />
        </span>
      </span>
    </a>
  );
}
