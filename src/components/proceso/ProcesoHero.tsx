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

export default function ProcesoHero() {
    return (
        <section className="relative min-h-[52vh] flex items-end overflow-hidden pb-0">
            {/* Glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[440px] w-[440px] rounded-full bg-[var(--electric)]/20 blur-[120px]" />
                <div className="absolute top-20 -right-24 h-[280px] w-[280px] rounded-full bg-[var(--violet-brand)]/15 blur-[90px]" />
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
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
                            Cómo trabajamos
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Un proceso{" "}
                        <span className="text-[var(--electric)] drop-shadow-[0_0_28px_rgba(61,41,204,0.35)]">
                            claro
                        </span>{" "}
                        y enfocado.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-white/55 leading-relaxed"
                    >
                        Sin vueltas, sin sorpresas. Te contamos exactamente qué pasa desde el primer día hasta
                        que tu proyecto sale al mundo.
                    </motion.p>
                </motion.div>
            </Container>

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
