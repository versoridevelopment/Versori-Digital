// src/components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container>
        <div className="py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-vertical.png"
                alt="Versori Digital"
                width={64}
                height={64}
                className="h-14 w-auto"
              />
              <div>
                <div className="text-lg font-semibold tracking-tight">Versori Digital</div>
                <p className="mt-1 text-sm text-white/70">
                  Marketing & Desarrollo
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Branding, marketing y desarrollo para marcas que quieren crecer con una presencia
              digital sólida.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="text-white/60">Secciones</div>
              <div className="flex flex-col gap-2">
                <Link className="text-white/80 hover:text-white" href="/#servicios">Servicios</Link>
                <Link className="text-white/80 hover:text-white" href="/#trabajos">Trabajos</Link>
                <Link className="text-white/80 hover:text-white" href="/proceso">Proceso</Link>
                <Link className="text-white/80 hover:text-white" href="/nosotros">Nosotros</Link>
                <Link className="text-white/80 hover:text-white" href="/blog">Blog</Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-white/60">Contacto</div>
              <div className="flex flex-col gap-2">
                <Link className="text-white/80 hover:text-white" href="/#contacto">Pedir propuesta</Link>
                <span className="text-white/70">Argentina</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/70">¿Listo para impulsar tu marca?</div>
            <div className="mt-2 text-white font-medium">Branding + Performance + Web moderna</div>
            <div className="mt-4 h-1 w-full rounded-full bg-brand-gradient-violet" />
          </div>
        </div>

        <div className="py-6 border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Versori Digital. Todos los derechos reservados.</span>
          <Link href="/privacidad" className="hover:text-white/70 transition">Política de privacidad</Link>
        </div>
      </Container>
    </footer>
  );
}