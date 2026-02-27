"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { motion, Variants } from "framer-motion";

const WORKS = [
  {
    title: "Landing de alto impacto",
    tag: "Web & Conversión",
    note: "Una página clara, rápida y pensada para convertir visitas en consultas.",
    preview: "/gafete.jpg",
    featured: true,
  },
  {
    title: "Contenido para redes",
    tag: "Redes",
    note: "Piezas consistentes con identidad, calendario y enfoque en crecimiento.",
    preview: "/stickers.jpg",
  },
  {
    title: "Identidad visual completa",
    tag: "Branding",
    note: "Logo, paleta y sistema visual listo para aplicarse en todos los canales.",
    preview: "/pines.jpg",
  },
  {
    title: "Campañas que convierten",
    tag: "Marketing",
    note: "Creatividades y mensajes orientados a resultados: consultas y ventas.",
    preview: "/stickers.jpg",
  },
  {
    title: "Presencia digital profesional",
    tag: "Marca",
    note: "Ordenamos tu imagen para que inspire confianza desde el primer vistazo.",
    preview: "/gafete.jpg",
  },
  {
    title: "Sistema de piezas para lanzamiento",
    tag: "Contenido",
    note: "Pack de posteos + historias + banners para salir con todo.",
    preview: "/pines.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Work() {
  const featured = WORKS.find((w) => w.featured);
  const rest = WORKS.filter((w) => !w.featured);

  return (
    <section id="trabajos" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/stickers.jpg" alt="Mockup Versori" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-brand-gradient opacity-40" />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
      </div>

      {/* Floating detail */}
      <motion.div
        className="pointer-events-none absolute -right-24 top-16 hidden lg:block z-0"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-[360px] w-[520px] rotate-6 opacity-60">
          <Image src="/pines.jpg" alt="Detalles" fill className="object-cover rounded-3xl" />
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-black/25" />
        </div>
      </motion.div>

      <Container>
        <motion.div
          className="relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <p className="text-xs text-[var(--electric)] font-bold tracking-widest uppercase">
              Trabajos
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-balance text-white">
              Ejemplos de entregables que hacen que tu marca se vea pro
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed text-balance">
              Una muestra del tipo de piezas que armamos: identidad, contenido para redes, campañas y landings.
            </p>
          </motion.div>

          {/* Featured + Grid (Bento Box Layout) */}
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {/* Featured card (Izquierda) */}
            {featured && (
              <motion.div
                variants={itemVariants}
                className="lg:col-span-7 flex flex-col rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md overflow-hidden group hover:border-white/20 transition-all duration-300"
              >
                <div className="relative w-full flex-1 min-h-[280px]">
                  <Image
                    src={featured.preview}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* ✅ SE ELIMINARON LOS DIVS DE SOMBRA Y DEGRADADO AQUÍ */}
                </div>

                {/* Contenido Fijo (Abajo) */}
                <div className="p-6 sm:p-8 shrink-0 bg-black/20">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                    <span className="h-2 w-2 rounded-full bg-[var(--electric)] animate-pulse" />
                    {featured.tag}
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white">{featured.title}</h3>
                  <p className="mt-2 text-white/70 leading-relaxed text-balance">{featured.note}</p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="#contacto"
                      className="inline-flex items-center justify-center rounded-full bg-[var(--electric)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--electric)]/90 transition shadow-[0_0_20px_rgba(61,41,204,0.3)] hover:shadow-[0_0_25px_rgba(61,41,204,0.5)]"
                    >
                      Quiero algo así →
                    </Link>

                    <Link
                      href="#servicios"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
                    >
                      Ver servicios
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Columna Derecha: 3 Tarjetas apiladas */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
              {rest.slice(0, 3).map((w) => (
                <Card key={w.title} {...w} />
              ))}
            </motion.div>
          </div>

          {/* Tarjetas Restantes (Fila Inferior) */}
          <motion.div variants={itemVariants} className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.slice(3).map((w) => (
              <Card key={w.title} {...w} />
            ))}
          </motion.div>

          {/* Bottom tip */}
          <motion.div
            variants={itemVariants}
            className="mt-12 overflow-hidden rounded-3xl border border-[var(--violet-brand)]/20 bg-gradient-to-r from-[var(--violet-brand)]/10 to-transparent p-6 sm:p-8 relative"
          >
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--violet-brand)]/20 text-[var(--violet-brand)]">
                💡
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--violet-brand)]">
                  Tip de conversión
                </div>
                <div className="mt-1 text-lg font-medium text-white/90 text-balance">
                  Si tu marca se ve confiable, tu precio se discute menos.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

// Componente Card Refinado
function Card({
  title,
  tag,
  note,
  preview,
}: {
  title: string;
  tag: string;
  note: string;
  preview: string;
}) {
  return (
    <div className="group flex flex-col rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md overflow-hidden hover:border-white/20 hover:bg-black/45 transition-all duration-300">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={preview}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* ✅ SE ELIMINÓ EL DIV DE SOMBRA AQUÍ */}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-[11px] font-bold uppercase tracking-wider text-white/50 group-hover:text-white/70 transition-colors">
          {tag}
        </div>
        <div className="mt-2 text-xl font-semibold text-white/90">{title}</div>
        <p className="mt-2 text-sm text-white/60 leading-relaxed flex-grow">{note}</p>

        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[var(--violet-brand)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--violet-brand)] opacity-0 group-hover:animate-ping group-hover:opacity-75 transition-opacity" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--violet-brand)]" />
          </span>
          Listo para publicar
        </div>
      </div>
    </div>
  );
}