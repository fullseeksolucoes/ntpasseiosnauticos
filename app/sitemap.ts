import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.ntpasseiosnauticos.com.br";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteUrl}/hero-canyons.webp`,
        `${siteUrl}/boat.webp`,
        `${siteUrl}/canyons.webp`,
        `${siteUrl}/cachoeira-lagoa-azul.webp`,
        `${siteUrl}/cachoeira-ilha.webp`,
        `${siteUrl}/cachoeira.webp`,
        `${siteUrl}/tucanos.webp`,
        `${siteUrl}/cascatinha.webp`,
        `${siteUrl}/bar.webp`,
        `${siteUrl}/sunset.webp`,
        `${siteUrl}/piloto.webp`,
        `${siteUrl}/experiencia1.webp`,
        `${siteUrl}/experiencia2.webp`,
        `${siteUrl}/experiencia3.webp`,
        `${siteUrl}/experiencia4.webp`,
        `${siteUrl}/og-image.webp`,
      ],
    },
  ];
}
