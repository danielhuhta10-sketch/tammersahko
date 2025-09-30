import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TammerSähkö — sähköasennukset",
  description: "Sähköasennukset ajallaan ja siististi. Latauspisteet, aurinkosähkö, remontit, vikakorjaukset — avaimet käteen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
