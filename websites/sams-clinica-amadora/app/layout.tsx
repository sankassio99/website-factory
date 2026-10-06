import type { Metadata } from "next";
import { Figtree, Noto_Sans } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica SAMS Amadora | Cuidados de saúde na Amadora",
  description:
    "Clínica SAMS Amadora, na Rua Elias Garcia. Parte da rede SAMS, com 27 especialidades médicas, exames complementares e horário alargado em dias úteis das 08:00 às 20:00.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body className={`${figtree.variable} ${notoSans.variable}`}>{children}</body>
    </html>
  );
}
