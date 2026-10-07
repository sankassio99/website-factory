"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { CONTACT } from "./data";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="Barbearia Casali">
          <Image
            src="/images/image-5.png"
            alt="Logótipo Barbearia Casali"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full bg-white object-cover"
          />
          <span className="hidden font-display text-lg tracking-wide sm:block">Barbearia Casali</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-widest md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold-light">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:+351${CONTACT.phone}`}
          className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-gold-light md:block"
        >
          Marcar
        </a>
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex flex-col gap-1 px-5 pb-5 md:hidden"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 uppercase tracking-widest">
              {l.label}
            </a>
          ))}
          <a href={`tel:+351${CONTACT.phone}`} className="mt-2 rounded-full bg-gold py-3 text-center font-semibold uppercase text-ink">
            Marcar
          </a>
        </motion.nav>
      )}
      <motion.div style={{ scaleX: scrollYProgress }} className="h-0.5 origin-left bg-gold-light" />
    </motion.header>
  );
}
