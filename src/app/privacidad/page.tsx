// src/app/privacidad/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrivacidadContent from "@/components/privacidad/PrivacidadContent";

export const metadata: Metadata = {
    title: "Política de privacidad | Versori Digital",
    description:
        "Política de privacidad de Versori Digital. Conocé cómo tratamos y protegemos tu información.",
};

export default function PrivacidadPage() {
    return (
        <>
            <Navbar />
            <main>
                <PrivacidadContent />
            </main>
            <Footer />
        </>
    );
}
