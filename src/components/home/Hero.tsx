"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
// 1. Agrega 'Variants' al import de framer-motion
import { motion, Variants } from "framer-motion"; 

// 2. Asigna el tipo : Variants a las variables
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, 
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background image (Se mantiene sin animación para que cargue inmediato) */}
      <div className="absolute inset-0">
        <Image
          src="/gafete.jpg"
          alt="Versori Digital"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-brand-gradient opacity-35" />

        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--violet-brand)]/20 blur-[120px]" />
        <div className="absolute -bottom-56 -left-40 h-[620px] w-[620px] rounded-full bg-[var(--electric)]/15 blur-[120px]" />

        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 flex min-h-[100svh] items-center justify-center pt-16">
          {/* Contenedor principal animado: 
            Le pasamos los variants y le decimos que al montar pase de "hidden" a "visible"
          */}
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--violet-brand)] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--violet-brand)]"></span>
                </span>
                Branding · Marketing · Desarrollo · Redes
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-balance text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Versori{" "}
              <span className="relative inline-block text-[var(--electric)] drop-shadow-[0_0_32px_rgba(61,41,204,0.4)]">
                Digital
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed text-balance"
            >
              Hacemos que tu marca se vea profesional, genere confianza y convierta.
              Identidad, contenido, campañas y web moderna lista para crecer.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#contacto" className="w-full sm:w-auto px-8">
                Pedir propuesta →
              </Button>

              <Button variant="ghost" href="#servicios" className="w-full sm:w-auto px-8">
                Ver servicios
              </Button>
            </motion.div>

            {/* Mini chips */}
            <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Chip label="Branding" value="Identidad" />
              <Chip label="Marketing" value="Estrategia" />
              <Chip label="Redes" value="Contenido" />
              <Chip label="Web" value="Experiencia UI" />
            </motion.div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="group flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-5 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.08] cursor-default">
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
        {label}
      </span>
      <span className="mt-1.5 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
        {value}
      </span>
    </div>
  );
}