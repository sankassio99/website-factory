import type { Metadata } from "next";
import { Inter, Playfair_Display, Mr_De_Haviland } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const script = Mr_De_Haviland({ subsets: ["latin"], weight: "400", variable: "--font-script" });

export const metadata: Metadata = {
  title: "Barbearia Casali | Barbeiro na Amadora",
  description:
    "Barbearia Casali na Amadora: cortes impecáveis, barba e atendimento cuidado. Av. Conde Castro Guimarães 22A. Marque o seu horário.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
