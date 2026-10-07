"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import { CONTACT, GALLERY, HOURS, REVIEWS, SERVICES } from "./data";

const cta =
  "inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-gold-light";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src="/images/image-4.png" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </motion.div>
      <motion.div style={{ y: textY }} className="relative mx-auto w-full max-w-7xl px-5 pt-24">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2 }}
          className="text-sm uppercase text-gold-light"
        >
          ★★★★★ Amadora
        </motion.p>
        <h1 className="mt-4 font-display text-5xl leading-tight sm:text-7xl lg:text-8xl">
          {["Crie o seu", "próprio estilo"].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-2">
              <motion.span
                className={`block ${i === 1 ? "italic text-gold-light" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 max-w-lg text-lg text-cream/80"
        >
          Cortes impecáveis, barba bem desenhada e um atendimento cuidado, num espaço onde se sente em casa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href={`tel:+351${CONTACT.phone}`} className={cta}>
            Marcar horário
          </motion.a>
          <a href="#servicos" className="rounded-full border border-cream/40 px-8 py-4 text-sm uppercase tracking-widest transition hover:border-gold-light hover:text-gold-light">
            Ver serviços
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Marquee() {
  const items = ["Cortes", "Barba", "Estilo", "Cafezinho", "Amadora"];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold/40 bg-navy py-4">
      <motion.div
        className="flex w-max gap-10 font-display text-2xl italic text-gold-light"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {row.concat(row).map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t} <span className="text-gold">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="bg-cream py-24 text-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal x={-50} y={0} className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full border-4 border-gold">
            <Image src="/images/image.png" alt="Interior da Barbearia Casali" fill sizes="(min-width:1024px) 400px, 90vw" className="object-cover" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="absolute -bottom-6 -right-4 h-28 w-28 overflow-hidden rounded-full border-4 border-cream bg-white shadow-xl"
          >
            <Image src="/images/image-5.png" alt="" fill sizes="112px" className="scale-150 object-contain" />
          </motion.div>
        </Reveal>
        <Reveal x={50} y={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Sobre nós</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Tradição, precisão e atenção a cada cliente</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Na Barbearia Casali, cada corte é feito com cuidado e dedicação. Um profissional talentoso, um espaço acolhedor
            no coração da Amadora e aquele cafezinho que só aqui encontra.
          </p>
          <div className="mt-8 rounded-2xl bg-ink p-6 text-cream">
            <h3 className="font-display text-xl text-gold-light">Horário</h3>
            <ul className="mt-3 divide-y divide-cream/10 text-sm">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between py-2">
                  <span>{h.day}</span>
                  <span className={h.time === "Fechado" ? "text-gold-light" : "text-cream/80"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <a href={`tel:+351${CONTACT.phone}`} className={`${cta} mt-8`}>
            Marcar horário
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicos" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-light">Serviços</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">O que oferecemos aos nossos clientes</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full rounded-2xl border border-gold/30 bg-cream p-7 text-ink shadow-lg transition-shadow hover:shadow-gold/20"
              >
                <span className="font-display text-5xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-ink/70">{s.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="galeria" className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-light">Galeria</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">O nosso espaço e o nosso trabalho</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.12} className={i % 2 ? "lg:mt-12" : ""}>
              <motion.div whileHover={{ scale: 1.03 }} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];
  return (
    <section id="avaliacoes" className="bg-cream py-24 text-ink">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Avaliações</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Os nossos clientes</h2>
        </Reveal>
        <div className="mt-12 min-h-72 rounded-3xl bg-ink p-8 text-cream shadow-2xl sm:p-12">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-xl text-gold-light">★★★★★</div>
              <blockquote className="mt-5 font-display text-xl italic leading-relaxed sm:text-2xl">“{r.text}”</blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-widest">
                {r.name} <span className="text-cream/50">· {r.meta}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          {REVIEWS.map((_, n) => (
            <button
              key={n}
              aria-label={`Avaliação ${n + 1}`}
              onClick={() => setI(n)}
              className={`h-3 rounded-full transition-all ${n === i ? "w-10 bg-gold" : "w-3 bg-ink/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="bg-navy py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <Reveal x={-40} y={0}>
          <p className="text-sm uppercase tracking-[0.3em] text-gold-light">Contacto</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Venha visitar-nos</h2>
          <p className="mt-6 text-lg text-cream/80">{CONTACT.address}</p>
          <a href={`tel:+351${CONTACT.phone}`} className="mt-4 block font-display text-4xl text-gold-light hover:underline">
            {CONTACT.phoneDisplay}
          </a>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:+351${CONTACT.phone}`} className={cta}>
              Ligar agora
            </a>
            <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/40 px-8 py-4 text-sm uppercase tracking-widest transition hover:border-gold-light hover:text-gold-light">
              Como chegar
            </a>
          </div>
        </Reveal>
        <Reveal x={40} y={0}>
          <iframe
            title="Mapa da Barbearia Casali"
            src={CONTACT.mapEmbed}
            loading="lazy"
            className="h-80 w-full rounded-2xl border-2 border-gold/50 grayscale lg:h-full lg:min-h-80"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-center text-sm text-cream/60">
      <div className="barber-pole mx-auto mb-6 h-2 w-40 rounded-full" />
      <p className="font-script text-4xl text-gold-light">Casali</p>
      <p className="mt-2">© {new Date().getFullYear()} Barbearia Casali · {CONTACT.address}</p>
    </footer>
  );
}
