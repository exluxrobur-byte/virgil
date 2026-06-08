import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisInit from "@/components/LenisInit";
import CustomCursor from "@/components/CustomCursor";
import Topbar from "@/components/Topbar";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: 'Virgil — Le guide qui écoute avant de parler',
  description: 'Une IA qui vous lit en temps réel et adapte chaque instant à qui vous êtes. Musées, événements, tourisme urbain.',
  openGraph: {
    title: 'Virgil — Le guide qui écoute avant de parler',
    description: 'Un moteur de décision qui orchestre l’expérience autour de la personne — et non du programme.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${syne.variable} ${jetbrainsMono.variable} antialiased font-sans bg-bg text-black selection:bg-blue selection:text-white`}>
        <LenisInit />
        <CustomCursor />
        <Topbar />
        {children}
      </body>
    </html>
  );
}
