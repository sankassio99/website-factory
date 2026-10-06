"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#acesso", label: "Quem Pode Aceder" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#exames", label: "Exames & Serviços" },
  { href: "#contacto", label: "Horário & Localização" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-header
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-heading)] text-lg font-extrabold tracking-tight text-[var(--color-ink)]"
          onClick={() => setOpen(false)}
        >
          SAMS <span className="text-[var(--color-primary)]">Amadora</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:clinica.amadora@sams.pt"
            className="btn-press rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[var(--color-accent-dark)]"
          >
            Contactar
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="btn-press flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        data-open={open}
        className="mobile-nav md:hidden"
      >
        <nav className="mobile-nav-panel mx-5 mb-4 flex flex-col gap-1 rounded-2xl border border-[var(--color-border)] bg-white p-3 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:clinica.amadora@sams.pt"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-bold text-white"
          >
            Contactar
          </a>
        </nav>
      </div>
    </header>
  );
}
