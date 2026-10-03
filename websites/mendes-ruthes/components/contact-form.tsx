"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react";

const services = [
  "Imigração e nacionalidade",
  "Direito civil e arrendamento",
  "Direito do trabalho",
  "Empresas e direito comercial",
  "Direito administrativo",
  "Serviços notariais",
  "Outro assunto",
];

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const text = [
      `Olá! Meu nome é ${name}.`,
      `Meu e-mail: ${email}`,
      `Assunto: ${subject}`,
      "",
      message,
    ].join("\n");
    const url = `https://wa.me/351932993461?text=${encodeURIComponent(text)}`;
    const newTab = window.open(url, "_blank", "noopener,noreferrer");

    if (!newTab) {
      window.location.assign(url);
      return;
    }

    setStatus("Sua mensagem está pronta no WhatsApp. É só enviar por lá.");
    event.currentTarget.reset();
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[11px] font-semibold text-ink">
            Seu nome <span className="text-accent">*</span>
          </span>
          <input
            className="form-field"
            type="text"
            name="name"
            placeholder="Como podemos chamar você?"
            autoComplete="name"
            required
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-[11px] font-semibold text-ink">
            Seu e-mail <span className="text-accent">*</span>
          </span>
          <input
            className="form-field"
            type="email"
            name="email"
            placeholder="voce@email.com"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-[11px] font-semibold text-ink">
          Como podemos ajudar? <span className="text-accent">*</span>
        </span>
        <select className="form-field" name="subject" defaultValue="" required>
          <option value="" disabled>
            Selecione uma área
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-[11px] font-semibold text-ink">
          Conte um pouco sobre o seu caso{" "}
          <span className="text-accent">*</span>
        </span>
        <textarea
          className="form-field min-h-32 resize-y"
          name="message"
          placeholder="Escreva sua mensagem..."
          required
        />
      </label>
      <p className="text-[10px] leading-5 text-muted">
        Ao continuar, o WhatsApp será aberto com os dados preenchidos para você
        revisar e enviar à nossa equipe.
      </p>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-xs font-semibold tracking-wide text-white transition hover:bg-accent sm:w-auto"
      >
        <WhatsappLogo size={17} weight="bold" />
        Continuar pelo WhatsApp
        <ArrowUpRight size={15} weight="bold" />
      </button>
      <p aria-live="polite" className="min-h-5 text-xs font-medium text-ink">
        {status}
      </p>
    </form>
  );
}
