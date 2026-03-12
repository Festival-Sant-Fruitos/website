import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    default: "XXXI Festival Internacional de Música Clàssica | Memorial Eduard Casajoana",
    template: "%s | Festival Internacional de Música Clàssica",
  },
  description:
    "XXXI Festival Internacional de Música Clàssica Memorial Eduard Casajoana. Juliol 2025 a Mon Sant Benet, Sant Fruitós de Bages. Més de 30 anys d'excel·lència musical.",
  keywords: [
    "festival música clàssica",
    "Mon Sant Benet",
    "Sant Fruitós de Bages",
    "concerts clàssica",
    "Eduard Casajoana",
    "Bages",
    "música clàssica Catalunya",
  ],
  authors: [{ name: "Associació Música Clàssica Memorial Eduard Casajoana" }],
  openGraph: {
    type: "website",
    locale: "ca_ES",
    siteName: "Festival Internacional de Música Clàssica",
    title: "XXXI Festival Internacional de Música Clàssica",
    description:
      "Juliol 2025 a Mon Sant Benet. Més de 30 anys de música clàssica d'excel·lència.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Festival Internacional de Música Clàssica a Mon Sant Benet",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca" className={cn("font-sans", geist.variable)}>
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        <Header />
        <main className="pt-[8rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
