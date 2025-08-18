import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAXE TECH - Agence digitale au Togo | Création sites web Lomé",
  description: "JAXE TECH, agence digitale basée à Lomé, Togo. Création de sites web, applications mobiles et solutions technologiques pour entreprises togolaises et africaines. Transformation digitale sur mesure.",
  keywords: "agence digitale Togo, création site web Lomé, développement application mobile Togo, agence web Lomé, transformation digitale Togo, site internet Togo, développeur web Togo, SEO Togo, e-commerce Togo",
  authors: [{ name: "JAXE TECH", url: "https://jaxe-tech.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://jaxe-tech.com",
  },
  openGraph: {
    title: "JAXE TECH - Agence digitale au Togo | Développement web & mobile",
    description: "Agence digitale spécialisée dans le développement de sites web et applications mobiles à Lomé, Togo. Solutions sur mesure pour entreprises africaines.",
    type: "website",
    locale: "fr_TG",
    url: "https://jaxe-tech.com",
    siteName: "JAXE TECH",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JAXE TECH - Agence digitale au Togo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAXE TECH - Agence digitale au Togo",
    description: "Développement de sites web et applications mobiles à Lomé, Togo",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
