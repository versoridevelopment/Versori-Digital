"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

const POSTS = [
    {
        tag: "Branding",
        tagColor: "var(--violet-brand)",
        date: "Próximamente",
        title: "Por qué tu logo no es tu marca (y qué hacer al respecto)",
        excerpt:
            "El branding es mucho más que el símbolo que usás en tus redes. Te contamos qué elementos construyen una identidad de verdad.",
        readTime: "5 min",
        featured: true,
    },
    {
        tag: "Marketing",
        tagColor: "var(--electric)",
        date: "Próximamente",
        title: "Cómo crear contenido que convierte sin gastar una fortuna",
        excerpt:
            "La clave no está en publicar más, sino en publicar mejor. Estrategias prácticas para marcas que arrancan con poco presupuesto.",
        readTime: "4 min",
        featured: false,
    },
    {
        tag: "Desarrollo Web",
        tagColor: "var(--electric)",
        date: "Próximamente",
        title: "¿Por qué tu web tarda en cargar y cómo arreglarlo hoy?",
        excerpt:
            "La velocidad de carga impacta directamente en tus ventas. Te damos las causas más comunes y las soluciones más efectivas.",
        readTime: "6 min",
        featured: false,
    },
    {
        tag: "SEO",
        tagColor: "var(--violet-brand)",
        date: "Próximamente",
        title: "SEO local para pequeños negocios: la guía que nadie te explica simple",
        excerpt:
            "Aparecer en Google Maps y en las búsquedas de tu ciudad no requiere ser un experto. Te lo explicamos paso a paso.",
        readTime: "7 min",
        featured: false,
    },
    {
        tag: "Redes Sociales",
        tagColor: "var(--violet-brand)",
        date: "Próximamente",
        title: "Instagram en 2025: qué funciona y qué ya no",
        excerpt:
            "El algoritmo cambió, los formatos evolucionaron y la audiencia también. Conocé las estrategias que están dando resultados hoy.",
        readTime: "5 min",
        featured: false,
    },
    {
        tag: "Estrategia",
        tagColor: "var(--electric)",
        date: "Próximamente",
        title: "Cómo definir tu cliente ideal en 3 pasos concretos",
        excerpt:
            "Venderle a todos es no venderle a nadie. Aprendé a identificar a tu buyer persona sin complicarte la vida.",
        readTime: "4 min",
        featured: false,
    },
];

function PostCard({ post, featured }: { post: typeof POSTS[0]; featured?: boolean }) {
    return (
        <div
            className={`group relative flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.06] cursor-default ${featured ? "sm:col-span-2" : ""
                }`}
        >
            {/* Top color bar */}
            <div
                className="h-0.5 w-full"
                style={{
                    background: `linear-gradient(90deg, ${post.tagColor}, transparent)`,
                }}
            />

            <div className="flex flex-col flex-1 p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                    <span
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                        style={{
                            color: post.tagColor,
                            background: `${post.tagColor}18`,
                            border: `1px solid ${post.tagColor}30`,
                        }}
                    >
                        {post.tag}
                    </span>
                    <span className="text-xs text-white/35">{post.date}</span>
                    <span className="ml-auto text-xs text-white/35">{post.readTime} lectura</span>
                </div>

                {/* Content */}
                <h3
                    className={`font-semibold text-white leading-snug mb-3 group-hover:text-white/90 transition-colors ${featured ? "text-xl" : "text-base"}`}
                    style={{ fontFamily: "var(--font-poppins)" }}
                >
                    {post.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{post.excerpt}</p>

                {/* Read more */}
                <div className="mt-5 text-xs font-medium text-white/35 group-hover:text-white/60 transition-colors">
                    Próximamente →
                </div>
            </div>
        </div>
    );
}

export default function BlogGrid() {
    const [featured, ...rest] = POSTS;

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#8e23a5]/8 to-black" />
            <div className="pointer-events-none absolute top-1/3 right-0 h-[350px] w-[350px] rounded-full bg-[#3d29cc]/10 blur-[120px]" />
            <div className="relative z-10"><Container>
                {/* Coming soon notice */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/55 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--violet-brand)] opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--violet-brand)]" />
                    </span>
                    El blog está en camino — estos son los primeros artículos que vienen.
                </motion.div>

                {/* Featured + grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Featured post spans 2 cols */}
                    <motion.div
                        className="sm:col-span-2"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <PostCard post={featured} featured />
                    </motion.div>

                    {/* Rest */}
                    {rest.map((post, i) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                        >
                            <PostCard post={post} />
                        </motion.div>
                    ))}
                </div>

                {/* Subscribe CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-14 rounded-2xl border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                    style={{
                        background: "linear-gradient(135deg, rgba(61,41,204,0.07) 0%, rgba(204,6,239,0.04) 100%)",
                    }}
                >
                    <div>
                        <p
                            className="text-base font-semibold text-white mb-1"
                            style={{ fontFamily: "var(--font-poppins)" }}
                        >
                            ¿Querés que te avisemos cuando publiquemos?
                        </p>
                        <p className="text-sm text-white/50">Dejanos tu mail y te avisamos sin spam.</p>
                    </div>
                    <a
                        href="/#contacto"
                        className="shrink-0 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-[var(--electric)] text-white hover:opacity-90 transition"
                    >
                        Notificarme →
                    </a>
                </motion.div>
            </Container></div>
        </section>
    );
}
