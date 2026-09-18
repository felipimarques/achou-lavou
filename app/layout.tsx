import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Achou Lavou — Lavanderia self-service em Cachoeirinha | 4.9★",
  description:
    "Lavanderia Automática Achou Lavou, Cachoeirinha / Lauzane Paulista. Máquinas Speed Queen: edredon Queen ou King, ou 2 cestos, de uma vez. Tecnologia, rapidez e facilidade. WhatsApp (11) 98702-7771.",
  keywords: ["lavanderia self service", "lavar edredon", "Cachoeirinha", "Lauzane Paulista"],
  openGraph: { title: "Achou Lavou — achou, lavou, resolvido", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
