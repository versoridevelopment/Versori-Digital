"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

const STEPS = [
    {
        number: "01",
        title: "Diagnóstico",
        description:
            "Nos juntamos (o chateamos) para entender tu marca, tu público y dónde querés llegar. Esta reunión inicial es gratis y sin compromiso.",
        color: "var(--electric)",
    },
    {
        number: "02",
        title: "Estrategia",
        description:
            "Con todo lo que aprendimos, armamos un plan a medida: objetivos, canales, identidad visual y métricas claras.",
        color: "var(--violet-brand)",
    },
    {
        number: "03",
        title: "Producción",
        description:
            "El equipo se pone en marcha: diseño, contenido, desarrollo. Trabajamos de forma ordenada con revisiones frecuentes.",
        color: "var(--electric)",
    },
    {
        number: "04",
        title: "Lanzamiento",
        description:
            "Revisamos todo junto, hacemos los últimos ajustes y salimos al mundo. Tu marca lista para competir.",
        color: "var(--violet-brand)",
    },
    {
        number: "05",
        title: "Seguimiento",
        description:
            "No desaparecemos. Medimos resultados, analizamos y seguimos optimizando para que el crecimiento sea sostenido.",
        color: "var(--electric)",
    },
];

export default function ProcesoSteps() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#3d29cc]/8 to-black" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 h-[350px] w-[350px] rounded-full bg-[#3a3399]/15 blur-[120px]" />
            <Container>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/[0.07] hidden md:block" />

                    <div className="flex flex-col gap-6">
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                            >
                                <div className="group relative md:pl-20">
                                    {/* Circle dot */}
                                    <div
                                        className="hidden md:flex absolute left-0 top-5 h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black text-xs font-bold transition-all duration-300 group-hover:border-white/25"
                                        style={{ color: step.color }}
                                    >
                                        {step.number}
                                    </div>

                                    {/* Card */}
                                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.055]">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                                            {/* Mobile number */}
                                            <span
                                                className="md:hidden text-xs font-bold"
                                                style={{ color: step.color }}
                                            >
                                                {step.number}
                                            </span>
                                            <h2
                                                className="text-lg font-semibold text-white"
                                                style={{ fontFamily: "var(--font-poppins)" }}
                                            >
                                                {step.title}
                                            </h2>
                                        </div>
                                        <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center"
                >
                    <p className="text-white/60 text-sm mb-1">¿Ya sabés lo que necesitás?</p>
                    <p
                        className="text-xl font-semibold text-white mb-5"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Arrancamos cuando vos quieras.
                    </p>
                    <a
                        href="/#contacto"
                        className="inline-flex items-center justify-center rounded-full px-7 py-2.5 text-sm font-medium bg-[var(--electric)] text-white hover:opacity-90 transition"
                    >
                        Pedir propuesta →
                    </a>
                </motion.div>
            </Container>
        </section>
    );
}
