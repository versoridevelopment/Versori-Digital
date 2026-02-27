"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // ✅ NO border acá (evita la línea)
        scrolled ? "bg-black/60 backdrop-blur" : "bg-transparent"
      )}
    >
      {/* ✅ Divider controlado por opacity (no “salta”) */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10 transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-horizontal.png"
              alt="Versori Digital"
              width={150}
              height={36}
              priority
              className={cn(
                "h-8 w-auto transition-opacity duration-300",
                scrolled ? "opacity-100" : "opacity-85"
              )}
            />
          </Link>

          {/* Desktop */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-6 text-sm transition-colors duration-300",
              scrolled ? "text-white/80" : "text-white/70"
            )}
          >
            {LINKS.map((l) => (
              <Link key={l.href} className="hover:text-white transition" href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" href="#contacto">
              Hablemos
            </Button>
            <Button href="#contacto">Pedir propuesta</Button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="md:hidden relative h-10 w-10 flex items-center justify-center"
            >
            <div className="relative h-5 w-6">
                <span
                className={cn(
                    "absolute left-0 top-0 h-[2px] w-full bg-white transition-all duration-300",
                    open && "top-2 rotate-45"
                )}
                />
                <span
                className={cn(
                    "absolute left-0 top-2 h-[2px] w-full bg-white transition-all duration-300",
                    open && "opacity-0"
                )}
                />
                <span
                className={cn(
                    "absolute left-0 top-4 h-[2px] w-full bg-white transition-all duration-300",
                    open && "top-2 -rotate-45"
                )}
                />
            </div>
            </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 rounded-2xl border border-white/10 bg-black/55 backdrop-blur p-3">
              <div className="flex flex-col gap-2 text-sm">
                {LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-white/85 hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2">
                <Button href="#contacto" className="w-full" onClick={() => setOpen(false)}>
                  Pedir propuesta
                </Button>
                <Button
                  variant="ghost"
                  href="#contacto"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Hablemos
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}