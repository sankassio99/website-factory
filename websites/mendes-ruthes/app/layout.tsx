import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mendes & Ruthes | Gabinete Jurídico",
  description:
    "Apoio jurídico próximo e personalizado em imigração, nacionalidade, direito civil, trabalho e serviços notariais. Estamos na Amadora, Portugal.",
  openGraph: {
    title: "Mendes & Ruthes | Gabinete Jurídico",
    description:
      "Orientação jurídica clara para você e sua família em Portugal.",
    locale: "pt_BR",
    type: "website",
    images: ["/images/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
