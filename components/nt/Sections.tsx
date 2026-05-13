import Image from "next/image";
import {
  Sailboat,
  ShieldCheck,
  Sun,
  Compass as CompassIcon,
  MapPin,
  Sparkles,
  Wine,
  Music2,
  LifeBuoy,
  Snowflake,
  Fuel,
  Camera,
  Anchor,
  Phone,
  Waves,
  Globe,
  MessageCircle,
} from "lucide-react";
import { Reveal, CountUp } from "./Reveal";
import { WaveDivider } from "./Compass";

/* ---------------- BENEFITS ---------------- */

export function Benefits() {
  const items = [
    {
      icon: Sailboat,
      label: "Lancha Premium",
      sub: "Conforto e elegância a bordo",
    },
    {
      icon: ShieldCheck,
      label: "Piloto Certificado",
      sub: "Mais de 10 anos de Furnas",
    },
    {
      icon: Sun,
      label: "Roteiros Exclusivos",
      sub: "Cânions, lagoas e cachoeiras",
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
    title: "Cânions de Furnas",
    img: "/canyons.jpg",
    tag: "ICÔNICO",
    desc: "Os monumentais paredões esculpidos pelas águas.",
  },
  {
    title: "Lagoa Azul",
    img: "/lagoa-azul.jpg",
    tag: "EXCLUSIVO",
    desc: "Águas cristalinas em tom de safira escondidas na mata.",
  },
  {
    title: "Vale dos Tucanos",
    img: "/tucanos.jpg",
    tag: "NATUREZA",
    desc: "Vida selvagem ao redor de uma enseada serena.",
  },
  {
    title: "Cascatinha",
    img: "/cachoeira.jpg",
    tag: "REFRESCANTE",
    desc: "Banho de cachoeira diretamente da lancha.",
  },
  {
    title: "Cachoeira da Ilha",
    img: "/sunset.jpg",
    tag: "ROMÂNTICO",
    desc: "Pôr do sol exclusivo entre paredões dourados.",
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
        large ? "h-[640px]" : "h-[300px]"
      }`}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--deep)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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
    <section
      id="roteiros"
      className="relative py-32 md:py-40 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
                — Roteiros & Destinos
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-ice leading-[1.05] text-balance max-w-3xl">
                Cinco paradas. Uma{" "}
                <span className="italic text-gold">só rota</span>{" "}
                inesquecível.
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
                  : i === 1
                    ? "md:col-span-2"
                    : i === 2
                      ? "md:col-span-2"
                      : i === 3
                        ? "md:col-span-3"
                        : "md:col-span-3"
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
  { t: "Reserve", d: "Pelo WhatsApp escolha data, horário e roteiro." },
  { t: "Embarque", d: "Recepção exclusiva no nosso ponto em Capitólio." },
  { t: "Navegue", d: "Cânions, paradas para banho e fotos cinematográficas." },
  {
    t: "Brinde",
    d: "Pôr do sol com bebida e som — em alto-mar de Furnas.",
  },
];

export function Timeline() {
  return (
    <section
      id="como-funciona"
      className="relative py-32 md:py-40 px-6"
    >
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
                  <h3 className="font-display text-2xl text-ice mt-6">
                    {s.t}
                  </h3>
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
    d: "Embarcação completa, segura e confortável para grupos exclusivos.",
  },
  {
    icon: ShieldCheck,
    t: "Segurança Total",
    d: "Coletes, sinalizadores e equipamentos certificados a bordo.",
  },
  {
    icon: CompassIcon,
    t: "Roteiros Sob Medida",
    d: "Personalizamos cada passeio conforme o seu desejo.",
  },
  {
    icon: Sparkles,
    t: "Atendimento VIP",
    d: "Detalhes pensados para tornar cada minuto memorável.",
  },
  {
    icon: Sun,
    t: "Horários Estratégicos",
    d: "Nascer e pôr do sol agendados para você.",
  },
  {
    icon: Camera,
    t: "Fotos Inclusas",
    d: "Pacote opcional com drone e edição cinematográfica.",
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
              Cada passeio é desenhado com a obsessão por detalhes de quem
              acredita que turismo náutico é, antes de tudo, uma arte.
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
    { n: 1200, s: "+", l: "Passeios realizados" },
    { n: 5, s: ".0", l: "Avaliação média" },
    { n: 10, s: "+", l: "Anos de experiência" },
    { n: 100, s: "%", l: "Clientes satisfeitos" },
  ];
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/sunset.jpg"
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
    t: "Sunset Experience",
    d: "3h navegando até o pôr do sol entre paredões.",
    img: "/sunset.jpg",
    price: "Sob consulta",
  },
  {
    t: "Tour Completo",
    d: "5h passando por todos os pontos icônicos.",
    img: "/canyons.jpg",
    price: "Sob consulta",
  },
  {
    t: "Day Cruise Privativo",
    d: "Dia inteiro com roteiro 100% personalizado.",
    img: "/experience.jpg",
    price: "Sob consulta",
  },
];

const WHATSAPP =
  "https://wa.me/5535999999999?text=Olá!%20Quero%20reservar%20um%20passeio%20com%20a%20NT.";

export function Tipos() {
  return (
    <section className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
              — Tipos de Passeio
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-ice text-balance">
              Escolha o seu <span className="italic text-gold">ritmo.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TIPOS.map((t, i) => (
            <Reveal key={t.t} delay={i * 0.1}>
              <div className="group relative h-[520px] rounded-3xl overflow-hidden shadow-deep">
                <Image
                  src={t.img}
                  alt={t.t}
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                    Pacote · 0{i + 1}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-ice">
                    {t.t}
                  </h3>
                  <p className="mt-3 text-ice/70 text-sm font-light">{t.d}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="font-mono text-xs text-ice/50">
                      {t.price}
                    </div>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold hover:text-ice"
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
  { i: Snowflake, t: "Cooler com gelo" },
  { i: Wine, t: "Bebidas geladas" },
  { i: Music2, t: "Som premium Bluetooth" },
  { i: LifeBuoy, t: "Coletes salva-vidas" },
  { i: Sailboat, t: "Boia rebocável" },
  { i: Fuel, t: "Combustível incluso" },
  { i: ShieldCheck, t: "Piloto experiente" },
  { i: Camera, t: "Pacote fotos opcional" },
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
                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[var(--gold-foreground)] transition-all">
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
    <section
      id="piloto"
      className="relative py-32 md:py-40 px-6"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <Image
              src="/pilot.jpg"
              alt="Capitão da NT Passeios Náuticos"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-light rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-ice">
              Capitão · NT
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
            Mais de uma década navegando pelas águas de Furnas. Conhece cada
            curva da represa, cada melhor ângulo da luz e os pontos secretos
            que só os locais sabem. À frente da NT, condução técnica, atenção
            humana e paixão pela região em cada saída.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "10+", l: "Anos em Furnas" },
              { k: "1.2k+", l: "Passeios" },
              { k: "5.0", l: "Avaliação" },
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
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <Anchor className="w-4 h-4 text-[var(--gold-foreground)]" />
            </div>
            <div>
              <div className="font-display text-2xl text-ice">
                NT Passeios Náuticos
              </div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold/80">
                Capitólio · MG
              </div>
            </div>
          </div>
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
              <a href="#experiencia" className="hover:text-gold">
                A Experiência
              </a>
            </li>
            <li>
              <a href="#roteiros" className="hover:text-gold">
                Roteiros
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-gold">
                Galeria
              </a>
            </li>
            <li>
              <a href="#piloto" className="hover:text-gold">
                Piloto
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gold">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">
            Contato
          </div>
          <ul className="space-y-3 text-ice/75 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold" /> +55 (35) 9999-9999
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
              href="#"
              className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-ice"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-ice"
            >
              <Camera className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5535999999999"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors text-ice"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-ice/40">
        <span>
          © {new Date().getFullYear()} NT Passeios Náuticos · Todos os direitos
          reservados
        </span>
        <span className="font-mono">Made with care in Capitólio</span>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */

const WHATSAPP_LINK =
  "https://wa.me/5535999999999?text=Olá!%20Quero%20reservar%20um%20passeio%20com%20a%20NT.";

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
        <span className="relative inline-flex w-14 h-14 rounded-full bg-gradient-gold items-center justify-center text-[var(--gold-foreground)] shadow-gold glow-gold-hover">
          <MessageCircle className="w-6 h-6" />
        </span>
      </span>
    </a>
  );
}
