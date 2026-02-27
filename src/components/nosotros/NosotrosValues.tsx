"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

const VALUES = [
    {
        icon: "⚡",
        title: "Velocidad con criterio",
        description:
            "Entregamos rápido sin sacrificar calidad. Procesos ágiles, decisiones claras y sin reuniones de más.",
    },
    {
        icon: "🎯",
        title: "Estrategia primero",
        description:
            "Antes de diseñar o escribir una línea de código, entendemos el negocio. El resultado es trabajo que importa.",
    },
    {
        icon: "🤝",
        title: "Socios, no proveedores",
        description:
            "Nos involucramos de verdad. Tu éxito es nuestro éxito, y lo tratamos como tal en cada proyecto.",
    },
    {
        icon: "📈",
        title: "Obsesión por los resultados",
        description:
            "Medimos, analizamos y optimizamos. Porque el trabajo bien hecho se mide con números reales.",
    },
];

export default function NosotrosValues() {
    return (
        <section className="py-20 bg-black">
            <Container>
                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl mb-14"
                >
                    <h2
                        className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Lo que nos define
                    </h2>
                    <p className="mt-3 text-white/55 text-sm leading-relaxed">
                        Más que una agencia, somos un equipo con valores claros y un compromiso genuino con cada
                        cliente.
                    </p>
                </motion.div>

                {/* Values grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {VALUES.map((val, i) => (
                        <motion.div
                            key={val.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                            className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.055]"
                        >
                            <div className="text-3xl mb-4">{val.icon}</div>
                            <h3
                                className="text-base font-semibold text-white mb-2"
                                style={{ fontFamily: "var(--font-poppins)" }}
                            >
                                {val.title}
                            </h3>
                            <p className="text-sm text-white/55 leading-relaxed">{val.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-14 rounded-2xl border border-white/10 p-8"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(61,41,204,0.08) 0%, rgba(204,6,239,0.06) 100%)",
                    }}
                >
                    <p className="text-white/70 text-sm leading-relaxed italic">
                        &ldquo;No somos la agencia más grande. Pero sí somos los que más nos involucramos con cada
                        proyecto. Eso hace toda la diferencia.&rdquo;
                    </p>
                    <p className="mt-4 text-xs text-white/40 font-medium uppercase tracking-widest">
                        — Equipo Versori
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
