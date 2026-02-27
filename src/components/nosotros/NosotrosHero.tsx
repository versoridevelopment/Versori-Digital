"use client";

import Container from "@/components/layout/Container";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

export default function NosotrosHero() {
    return (
        <section className="relative min-h-[52vh] flex items-end overflow-hidden pb-0">
            {/* Glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full bg-[var(--violet-brand)]/20 blur-[110px]" />
                <div className="absolute top-16 right-0 h-[260px] w-[260px] rounded-full bg-[var(--electric)]/15 blur-[80px]" />
                <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />
            </div>

            <Container>
                <motion.div
                    className="relative z-10 pt-36 pb-16 max-w-3xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--violet-brand)]" />
                            Sobre nosotros
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Gente real,{" "}
                        <span className="text-[var(--violet-brand)] drop-shadow-[0_0_28px_rgba(204,6,239,0.3)]">
                            resultados reales.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-white/55 leading-relaxed"
                    >
                        Somos un equipo apasionado por el diseño, la estrategia y la tecnología. Trabajamos con
                        marcas que quieren hacer las cosas bien.
                    </motion.p>
                </motion.div>
            </Container>

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
