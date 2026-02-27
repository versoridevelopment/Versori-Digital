// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/*
Para Versori Digital (marketing + dev), yo haría:



Home /

Servicios /servicios

Trabajos / Portfolio /trabajos

Proceso /proceso

Sobre nosotros /nosotros (opcional)

Contacto /contacto

Política de privacidad /privacidad (recomendado mínimo legal)

Blog /blog (opcional, si querés SEO)

Hoy arrancamos con Home y dejamos anchors listos para después.
*/