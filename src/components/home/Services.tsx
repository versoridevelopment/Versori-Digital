// src/components/home/Services.tsx
import Container from "@/components/layout/Container";

const SERVICES = [
  {
    title: "Branding & Identidad",
    desc: "Creamos marcas con personalidad y coherencia visual: desde el logo hasta los colores, tipografías y estilo único de tu negocio.",
    icon: "✨",
  },
  {
    title: "Marketing & Campañas",
    desc: "Estrategias pensadas para atraer clientes y convertir atención en ventas reales: publicidad, contenido pago y resultados medibles.",
    icon: "📈",
  },
  {
    title: "Manejo de Redes",
    desc: "Contenido estratégico y publicaciones pensadas para crecer: fotos, videos, textos y todo lo que necesitás en tus redes.",
    icon: "📱",
  },
  {
    title: "Web & Sistemas",
    desc: "Sitios modernos y sistemas a medida: desde una página profesional hasta una aplicación completa para tu negocio.",
    icon: "🌐",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-white/60 tracking-widest uppercase">Servicios</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
            Todo lo que tu marca necesita para crecer
          </h2>
          <p className="mt-3 text-white/75">
            Desde la identidad hasta la ejecución. Pensamos estrategia, diseño y resultados.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/[0.07] transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center text-xl">
                  {s.icon}
                </div>
                <div className="text-base font-semibold">{s.title}</div>
              </div>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">{s.desc}</p>

              <div className="mt-6 h-1 w-full rounded-full bg-brand-gradient-violet opacity-80" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}