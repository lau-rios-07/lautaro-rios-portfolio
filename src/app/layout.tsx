import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import { Navigation } from "@/components/layout/Navigation";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

// Self-hosted via next/font — no external font request at runtime, zero
// layout shift. Each font exposes a CSS variable that globals.css maps
// into the --font-display / --font-body / --font-mono theme tokens.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// TODO: replace with the real deployed domain once it exists — this affects
// canonical URLs and Open Graph image resolution.
const siteUrl = "https://lautarorios.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Junior Data Analyst portfolio featuring end-to-end business analytics projects built with SQL, Python, Excel, and Power BI.",
  keywords: [
    "Data Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Data Analytics Portfolio",
    "Junior Data Analyst",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Junior Data Analyst portfolio featuring end-to-end business analytics projects built with SQL, Python, Excel, and Power BI.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: "Junior Data Analyst portfolio featuring end-to-end business analytics projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteUrl,
    sameAs: [siteConfig.linkedin, siteConfig.github],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-cream font-body text-charcoal antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- static, locally-defined JSON, not user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-charcoal focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <GrainOverlay />
        <Analytics />
      </body>
    </html>
  );
}
