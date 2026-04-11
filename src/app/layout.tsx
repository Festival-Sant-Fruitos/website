import type { Metadata, Viewport } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsentBanner from "@/components/shared/CookieConsent";
import { getCurrentEdition } from "@/lib/festival";

const edition = getCurrentEdition();

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://festivalmusicaclassica.cat'),
  title: {
    default: `${edition.edition} Festival Internacional de Música Clàssica | Memorial Eduard Casajoana`,
    template: "%s | Festival Internacional de Música Clàssica",
  },
  description:
    `${edition.edition} Festival Internacional de Música Clàssica Memorial Eduard Casajoana. Juliol ${edition.year} a Món Sant Benet, Sant Fruitós de Bages. Més de 30 anys d'excel·lència musical.`,
  keywords: [
    "festival música clàssica",
    "Món Sant Benet",
    "Sant Fruitós de Bages",
    "concerts clàssica",
    "Eduard Casajoana",
    "Bages",
    "música clàssica Catalunya",
  ],
  authors: [{ name: "Associació Música Clàssica Memorial Eduard Casajoana" }],
  twitter: {
    card: 'summary_large_image',
    title: `${edition.edition} Festival Internacional de Música Clàssica`,
    description: `Juliol ${edition.year} a Món Sant Benet. Més de 30 anys de música clàssica d'excel·lència.`,
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "ca_ES",
    siteName: "Festival Internacional de Música Clàssica",
    title: `${edition.edition} Festival Internacional de Música Clàssica`,
    description:
      `Juliol ${edition.year} a Món Sant Benet. Més de 30 anys de música clàssica d'excel·lència.`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Festival Internacional de Música Clàssica a Món Sant Benet",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#2C2C2C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-white focus:text-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg">
          Salta al contingut
        </a>
        <Header />
        <main id="main-content" className="pt-20">{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
