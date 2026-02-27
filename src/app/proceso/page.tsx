// src/app/proceso/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProcesoHero from "@/components/proceso/ProcesoHero";
import ProcesoSteps from "@/components/proceso/ProcesoSteps";

export const metadata: Metadata = {
    title: "Proceso | Versori Digital",
    description:
        "Así trabajamos: un proceso claro, ordenado y enfocado en resultados reales para tu marca.",
};

export default function ProcesoPage() {
    return (
        <>
            <Navbar />
            <main>
                <ProcesoHero />
                <ProcesoSteps />
            </main>
            <Footer />
        </>
    );
}
