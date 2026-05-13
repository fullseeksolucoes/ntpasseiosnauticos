import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = "https://www.ntpasseiosnauticos.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NT Passeios Náuticos | Capitólio · MG",
    template: "%s | NT Passeios Náuticos",
  },
  description:
    "Passeios náuticos exclusivos pela Represa de Furnas em Capitólio, MG. Cânions monumentais, águas cristalinas e pôr do sol cinematográfico a bordo de lancha premium.",
  keywords: [
    "passeios náuticos Capitólio",
    "passeio de lancha Furnas",
    "cânions de Capitólio",
    "passeio náutico Furnas",
    "Capitólio MG turismo",
    "lancha em Capitólio",
    "passeio de barco Capitólio",
    "Represa de Furnas",
    "turismo Minas Gerais",
    "passeio cachoeira Capitólio",
    "NT Passeios Náuticos",
    "barco Furnas",
    "passeio lancha premium",
    "capitólio passeio barco",
    "furnas passeio lancha",
  ],
  authors: [{ name: "NT Passeios Náuticos" }],
  creator: "NT Passeios Náuticos",
  publisher: "NT Passeios Náuticos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "NT Passeios Náuticos",
    title: "NT Passeios Náuticos | Capitólio · MG",
    description:
      "Passeios náuticos exclusivos pela Represa de Furnas — cânions, águas cristalinas e pôr do sol inesquecível.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "NT Passeios Náuticos - Passeios pela Represa de Furnas em Capitólio, MG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NT Passeios Náuticos | Capitólio · MG",
    description:
      "Passeios náuticos exclusivos pela Represa de Furnas em Capitólio, MG.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "turismo",
  classification: "Passeios Náuticos em Capitólio",
  // verification: {
  //   google: "SEU_CODIGO_GOOGLE_VERIFICATION",
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "NT Passeios Náuticos",
      alternateName: "NT Passeios",
      description:
        "Passeios náuticos exclusivos pela Represa de Furnas em Capitólio, MG. Lancha premium, piloto certificado e roteiros personalizados.",
      url: siteUrl,
      telephone: "+5531997279740",
      email: "ntpasseios@gmail.com",
      image: `${siteUrl}/logo.webp`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Capitólio",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -20.6147,
        longitude: -46.0481,
      },
      areaServed: {
        "@type": "City",
        name: "Capitólio",
        sameAs: "https://pt.wikipedia.org/wiki/Capitólio_(Minas_Gerais)",
      },
      priceRange: "$$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
      sameAs: [
        "https://www.instagram.com/ntpasseioscapitolio",
        "https://www.tiktok.com/@ntpasseioscapitolio",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Como faço para reservar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A reserva é feita diretamente pelo WhatsApp. Após a confirmação, alinhamos data, horário e detalhes do passeio.",
          },
        },
        {
          "@type": "Question",
          name: "Quantas pessoas cabem na lancha?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A embarcação comporta até 12 pessoas com conforto e segurança.",
          },
        },
        {
          "@type": "Question",
          name: "O que está incluso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O passeio inclui combustível, piloto certificado, coletes higienizados, cooler com gelo, som JBL e área gourmet a bordo.",
          },
        },
        {
          "@type": "Question",
          name: "Posso levar meu pet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A NT Passeios Náuticos é pet friendly e seu pet também pode aproveitar o passeio.",
          },
        },
        {
          "@type": "Question",
          name: "Qual é o ponto de saída?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As saídas acontecem pelo Porto Escarpas, em Capitólio/MG.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      "@id": `${siteUrl}/#product`,
      name: "Passeio Náutico em Capitólio - Furnas",
      description:
        "Experiência náutica premium pela Represa de Furnas com lancha, piloto certificado e roteiro pelos cânions de Capitólio.",
      brand: {
        "@type": "Brand",
        name: "NT Passeios Náuticos",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Passeio Completo",
          description:
            "Roteiro de 7 horas passando pelos Cânions, Vale dos Tucanos, bar flutuante e pôr do sol em Furnas.",
          category: "Tour",
        },
        {
          "@type": "Offer",
          name: "Cachoeira da Ilha",
          description:
            "Passeio de 3h a 4h com paradas para banho e roteiro passando pela Cachoeira da Ilha.",
          category: "Tour",
        },
        {
          "@type": "Offer",
          name: "Combo Náutico",
          description:
            "Experiência combinando lancha e moto aquática durante o passeio pelas águas de Furnas.",
          category: "Tour",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
      <head>
        <meta name="theme-color" content="#0a1628" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="apple-touch-icon" href="/logo.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
