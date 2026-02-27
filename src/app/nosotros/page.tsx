// src/app/nosotros/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NosotrosHero from "@/components/nosotros/NosotrosHero";
import NosotrosValues from "@/components/nosotros/NosotrosValues";

export const metadata: Metadata = {
    title: "Sobre nosotros | Versori Digital",
    description:
        "Conocé el equipo detrás de Versori Digital: branding, marketing y desarrollo web con propósito.",
};

export default function NosotrosPage() {
    return (
        <>
            <Navbar />
            <main>
                <NosotrosHero />
                <NosotrosValues />
            </main>
            <Footer />
        </>
    );
}
