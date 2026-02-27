// src/components/home/Contact.tsx
"use client";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const WHATSAPP_URL = "https://wa.me/549XXXXXXXXXX"; // <- cambiá por tu número
const INSTAGRAM_URL = "https://instagram.com/versoridigital"; // <- cambiá si hace falta

export default function Contact() {
  return (
    <section id="contacto" className="relative py-18 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--violet-brand)]/35 via-[var(--electric)]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="text-xs text-white/60 tracking-widest uppercase">Contacto</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              Contanos qué querés lograr y armamos una propuesta
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              Si tu objetivo es vender más, generar más consultas o elevar la percepción de tu marca,
              este es el lugar. Te respondemos rápido.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/70">Canales directos</div>
              <div className="mt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-white/15 hover:bg-white/10 transition"
                >
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-white/15 hover:bg-white/10 transition"
                >
                  Instagram
                </a>
              </div>

              <div className="mt-4 text-xs text-white/55">
                Tip: cuanto más contexto nos des (rubro, objetivo, referencias), más precisa sale la propuesta.
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-7">
            <div className="text-sm text-white/70">Formulario</div>
            <div className="mt-1 text-white font-medium">Recibí una propuesta</div>

            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Listo ✅ (después lo conectamos a email/whatsapp)");
              }}
            >
              <Field label="Nombre">
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Tu nombre"
                  required
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="tu@email.com"
                  required
                />
              </Field>

              <Field label="¿Qué necesitás?">
                <select
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  <option>Branding / Identidad</option>
                  <option>Marketing / Ads</option>
                  <option>Landing / Web</option>
                  <option>Todo completo</option>
                </select>
              </Field>

              <Field label="Mensaje">
                <textarea
                  className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Contanos tu rubro, objetivo y referencias si tenés."
                  required
                />
              </Field>

              <div className="mt-2 flex flex-col sm:flex-row gap-3">
                <Button type="submit" className="w-full sm:w-auto">
                  Enviar
                </Button>
                <Button
                  variant="ghost"
                  href={WHATSAPP_URL}
                  className="w-full sm:w-auto"
                >
                  Hablar por WhatsApp
                </Button>
              </div>

              <div className="text-xs text-white/55">
                Respuesta estimada: dentro del día. (Si es urgente, WhatsApp.)
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs text-white/60">{label}</span>
      {children}
    </label>
  );
}