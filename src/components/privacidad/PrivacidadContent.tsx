"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

const SECTIONS = [
    {
        title: "1. Qué información recopilamos",
        content:
            "Podemos recopilar información que nos proporcionás directamente (nombre, email, mensaje) a través del formulario de contacto. No recopilamos datos sensibles ni información sin tu consentimiento explícito.",
    },
    {
        title: "2. Cómo usamos tu información",
        content:
            "Usamos tu información únicamente para responder a tus consultas y mejorar nuestros servicios. Nunca vendemos, alquilamos ni compartimos tus datos con terceros sin tu autorización.",
    },
    {
        title: "3. Cookies",
        content:
            "Este sitio puede usar cookies técnicas para mejorar la experiencia de navegación. No usamos cookies de seguimiento de terceros ni publicidad comportamental.",
    },
    {
        title: "4. Seguridad",
        content:
            "Tomamos medidas razonables para proteger tu información. Sin embargo, ningún sistema de transmisión por internet es 100% seguro, por lo que no podemos garantizar seguridad absoluta.",
    },
    {
        title: "5. Tus derechos",
        content:
            "Podés solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento escribiéndonos al correo de contacto. Respondemos en un plazo máximo de 10 días hábiles.",
    },
    {
        title: "6. Cambios a esta política",
        content:
            "Podemos actualizar esta política periódicamente. Si hay cambios significativos, lo comunicaremos en esta misma página. Te recomendamos revisarla con regularidad.",
    },
    {
        title: "7. Contacto",
        content:
            "Si tenés preguntas sobre esta política podés contactarnos a través del formulario de contacto en nuestra página principal.",
    },
];

export default function PrivacidadContent() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-[var(--electric)]/10 blur-[100px]" />
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
            </div>

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="pt-36 pb-12 max-w-2xl"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
                        Legal
                    </span>
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white"
                        style={{ fontFamily: "var(--font-poppins)" }}
                    >
                        Política de privacidad
                    </h1>
                    <p className="mt-4 text-white/50 text-sm leading-relaxed">
                        Última actualización: {new Date().toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                    <p className="mt-3 text-white/55 text-sm leading-relaxed max-w-xl">
                        En Versori Digital nos tomamos muy en serio la privacidad de tu información. Acá te
                        explicamos de forma clara qué datos recopilamos y cómo los usamos.
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="pb-24 max-w-2xl flex flex-col gap-5">
                    {SECTIONS.map((sec, i) => (
                        <motion.div
                            key={sec.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                            className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-sm"
                        >
                            <h2
                                className="text-sm font-semibold text-white mb-2"
                                style={{ fontFamily: "var(--font-poppins)" }}
                            >
                                {sec.title}
                            </h2>
                            <p className="text-sm text-white/55 leading-relaxed">{sec.content}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
