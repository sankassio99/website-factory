"use client";

import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const links = [
  ["#sobre", "O gabinete"],
  ["#atuacao", "Áreas de atuação"],
  ["#processo", "Como funciona"],
  ["#avaliacoes", "Depoimentos"],
  ["#localizacao", "Localização"],
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${solid ? "header-solid" : "bg-transparent"}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${solid ? "py-3" : "py-5"}`}
      >
        <a
          className="group flex items-center gap-3"
          href="#inicio"
          aria-label="Mendes e Ruthes, início"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-11 items-center justify-center border border-white/35 font-serif text-[17px] tracking-[-0.1em] transition group-hover:border-accent">
            M<span className="text-accent">&</span>R
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[15px] tracking-wide">
              MENDES <span className="text-accent">&</span> RUTHES
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.24em] text-white/60">
              GABINETE JURÍDICO
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 text-[12px] font-medium text-white/85 lg:flex"
        >
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative py-1 transition hover:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden items-center gap-2 bg-accent px-5 py-3 text-[11px] font-semibold tracking-wide text-white transition hover:bg-white hover:text-ink sm:inline-flex"
          >
            Fale conosco
            <ArrowUpRight size={15} weight="bold" />
          </a>
          <button
            type="button"
            className="flex size-11 items-center justify-center border border-white/30 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <nav
          aria-label="Menu móvel"
          className="min-h-0 overflow-hidden"
          inert={!open}
        >
          <div className="flex flex-col gap-1 border-t border-white/10 px-5 pb-6 pt-3">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-serif text-xl"
              >
                {label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 bg-accent px-5 py-4 text-center text-xs font-semibold tracking-wide"
            >
              Fale conosco
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
