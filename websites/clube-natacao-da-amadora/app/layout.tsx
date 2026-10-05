import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clube Natação da Amadora | Piscinas de Alfornelos e Reboleira",
  description:
    "Instituição de utilidade pública com piscinas em Alfornelos e Reboleira, na Amadora. Informação sobre inscrições e contactos das secretarias.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
