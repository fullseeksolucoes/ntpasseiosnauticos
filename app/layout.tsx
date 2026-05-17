import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    default: "Passeio de Lancha em Capitólio MG | NT Passeios Náuticos",
    template: "%s | NT Passeios Náuticos",
  },

  description:
    "Passeios de lancha em Capitólio MG pela Represa de Furnas. Conheça os cânions, cachoeiras e águas cristalinas com uma experiência náutica premium e privativa.",

  keywords: [
    "passeio de lancha em Capitólio",
    "passeio náutico em Capitólio MG",
    "cânions de Furnas",
    "turismo em Capitólio",
    "lancha em Escarpas do Lago",
    "passeio privativo em Capitólio",
    "aluguel de lancha Capitólio",
    "passeio de barco em Capitólio",
    "o que fazer em Capitólio MG",
    "Represa de Furnas",
    "NT Passeios Náuticos",
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
    alternateLocale: "en_US",

    url: siteUrl,
    siteName: "NT Passeios Náuticos",

    title: "Passeio de Lancha em Capitólio MG | NT Passeios Náuticos",

    description:
      "Explore os cânions de Furnas em Capitólio MG com passeios náuticos exclusivos, lancha premium e experiências inesquecíveis.",

    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Passeio de lancha pelos cânions de Capitólio MG na Represa de Furnas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Passeio de Lancha em Capitólio MG | NT Passeios Náuticos",

    description:
      "Passeios náuticos exclusivos em Capitólio MG pela Represa de Furnas.",

    images: ["/og-image.webp"],
  },

  alternates: {
    canonical: siteUrl,
  },

  category: "turismo",

  classification: "Turismo Náutico e Passeios de Lancha em Capitólio MG",

  verification: {
    google: "SEU_CODIGO_GOOGLE_VERIFICATION",
  },

  other: {
    "geo.region": "BR-MG",
    "geo.placename": "Capitólio",
    "geo.position": "-20.6147;-46.0481",
    ICBM: "-20.6147, -46.0481",
  },
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
        "Passeios náuticos exclusivos pela Represa de Furnas em Capitólio MG com lancha premium, piloto certificado e roteiros personalizados.",

      url: siteUrl,

      inLanguage: "pt-BR",

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
      "@type": "WebSite",

      "@id": `${siteUrl}/#website`,

      url: siteUrl,

      name: "NT Passeios Náuticos",

      inLanguage: "pt-BR",

      description:
        "Passeios de lancha em Capitólio MG pelos cânions da Represa de Furnas.",

      publisher: {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
      },
    },

    {
      "@type": "TouristTrip",

      "@id": `${siteUrl}/#tour-completo`,

      name: "Passeio Completo pelos Cânions de Capitólio",

      inLanguage: "pt-BR",

      description:
        "Passeio de lancha pelos cânions de Capitólio, Vale dos Tucanos, bar flutuante e pôr do sol em Furnas.",

      itinerary: {
        "@type": "ItemList",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Cânions de Capitólio",
          },

          {
            "@type": "ListItem",
            position: 2,
            name: "Vale dos Tucanos",
          },

          {
            "@type": "ListItem",
            position: 3,
            name: "Bar Flutuante",
          },

          {
            "@type": "ListItem",
            position: 4,
            name: "Pôr do Sol em Furnas",
          },
        ],
      },

      offers: {
        "@type": "Offer",

        availability: "https://schema.org/InStock",

        url: siteUrl,
      },
    },

    {
      "@type": "TouristTrip",

      "@id": `${siteUrl}/#tour-cachoeira-ilha`,

      name: "Passeio Cachoeira da Ilha em Capitólio",

      inLanguage: "pt-BR",

      description:
        "Passeio de lancha com paradas para banho na Cachoeira da Ilha em Capitólio MG.",

      offers: {
        "@type": "Offer",

        availability: "https://schema.org/InStock",

        url: siteUrl,
      },
    },

    {
      "@type": "TouristTrip",

      "@id": `${siteUrl}/#tour-combo`,

      name: "Combo Náutico com Lancha e Moto Aquática",

      inLanguage: "pt-BR",

      description:
        "Experiência premium combinando passeio de lancha e moto aquática em Furnas.",

      offers: {
        "@type": "Offer",

        availability: "https://schema.org/InStock",

        url: siteUrl,
      },
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

            text: "A reserva é feita diretamente pelo WhatsApp. Após a confirmação alinhamos data, horário e detalhes do passeio.",
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

            text: "O passeio inclui combustível, piloto certificado, coletes higienizados, som JBL e área gourmet a bordo.",
          },
        },

        {
          "@type": "Question",

          name: "Posso levar pet?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sim. O passeio é pet friendly.",
          },
        },

        {
          "@type": "Question",

          name: "Qual é o ponto de saída?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "As saídas acontecem em Capitólio MG pela região de Escarpas do Lago.",
          },
        },
      ],
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${siteUrl}/#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteUrl,
        },
      ],
    },

    {
      "@type": "ImageObject",

      "@id": `${siteUrl}/#ogimage`,

      url: `${siteUrl}/og-image.webp`,

      caption:
        "Passeio de lancha pelos cânions de Capitólio MG na Represa de Furnas",

      contentLocation: {
        "@type": "Place",
        name: "Capitólio MG",
      },
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

        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <meta name="format-detection" content="telephone=yes" />

        <link rel="canonical" href={siteUrl} />

        <link rel="apple-touch-icon" href="/logo.webp" />

        <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>
        <GoogleAnalytics gaId="AW-18168032233" />
        {children}
      </body>
    </html>
  );
}
