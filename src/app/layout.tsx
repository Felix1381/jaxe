import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  description: "JAXE TECH, agence digitale basée à Lomé, Togo. Création de sites web, applications mobiles et solutions technologiques pour entreprises togolaises et africaines.",
  keywords: "agence digitale Togo, création site web Lomé, développement application mobile Togo, agence web Lomé, transformation digitale Togo, site internet Togo",
  authors: [{ name: "JAXE TECH" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "JAXE TECH - Agence digitale au Togo",
    description: "Développement de sites web et applications performantes à Lomé, Togo",
    type: "website",
    locale: "fr_TG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
