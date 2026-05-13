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

export const metadata: Metadata = {
  title: "NT Passeios Náuticos | Capitólio · MG",
  description:
    "Passeios náuticos exclusivos pela Represa de Furnas em Capitólio, MG. Cânions monumentais, águas cristalinas e pôr do sol cinematográfico a bordo de lancha premium.",
  keywords: [
    "passeios náuticos",
    "Capitólio",
    "Represa de Furnas",
    "cânions",
    "lancha",
    "turismo Minas Gerais",
  ],
  openGraph: {
    title: "NT Passeios Náuticos | Capitólio · MG",
    description:
      "Passeios náuticos exclusivos pela Represa de Furnas — cânions, águas cristalinas e pôr do sol inesquecível.",
    locale: "pt_BR",
    type: "website",
    siteName: "NT Passeios Náuticos",
  },
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
      <body>{children}</body>
    </html>
  );
}
