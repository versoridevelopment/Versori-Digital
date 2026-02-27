// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Versori Digital | Marketing & Desarrollo",
  description:
    "Branding, marketing y desarrollo web para marcas que buscan crecer con una presencia digital sólida.",
  // ✅ No hace falta declarar icons si ya tenés src/app/icon.png (Next lo detecta solo)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}