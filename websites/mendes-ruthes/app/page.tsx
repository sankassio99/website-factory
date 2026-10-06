import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CalendarBlank,
  ChatCircleText,
  Clock,
  FileText,
  GlobeHemisphereWest,
  IdentificationCard,
  InstagramLogo,
  MapPin,
  NotePencil,
  Phone,
  Scales,
  SealCheck,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/contact-form";
import MotionEffects from "@/components/motion-effects";
import SiteHeader from "@/components/site-header";

const services = [
  {
    number: "01",
    icon: GlobeHemisphereWest,
    title: "Imigração & nacionalidade",
    description:
      "Orientação em vistos, autorizações de residência e processos de nacionalidade portuguesa.",
  },
  {
    number: "02",
    icon: Buildings,
    title: "Direito civil & arrendamento",
    description:
      "Apoio em contratos, arrendamentos, heranças, partilhas e divórcios.",
  },
  {
    number: "03",
    icon: IdentificationCard,
    title: "Direito do trabalho",
    description:
      "Aconselhamento em relações de trabalho, direitos e questões laborais.",
  },
  {
    number: "04",
    icon: NotePencil,
    title: "Empresas & comercial",
    description:
      "Constituição, alterações e registo de empresas. Soluções para particulares e negócios.",
  },
  {
    number: "05",
    icon: Scales,
    title: "Direito administrativo",
    description:
      "Acompanhamento em procedimentos administrativos e assuntos junto às entidades públicas.",
  },
  {
    number: "06",
    icon: FileText,
    title: "Serviços notariais",
    description:
      "Reconhecimento de assinaturas, certificação de documentos e autenticações.",
  },
];

const steps = [
  {
    number: "01",
    icon: ChatCircleText,
    title: "Conte o seu caso",
    description:
      "Fale conosco por telefone, WhatsApp ou formulário e explique a sua situação.",
  },
  {
    number: "02",
    icon: CalendarBlank,
    title: "Converse com a equipe",
    description:
      "Marcamos uma conversa para entender o contexto e esclarecer as suas dúvidas.",
  },
  {
    number: "03",
    icon: SealCheck,
    title: "Siga com acompanhamento",
    description:
      "Explicamos cada etapa com transparência e acompanhamos o processo ao seu lado.",
  },
];

const reviews = [
  {
    quote:
      "A Edena foi sempre muito atenciosa, esclarecendo todas as dúvidas e garantindo que cada etapa fosse cumprida com eficiência.",
    name: "Isabelly Oliveira",
    detail: "Apoio em processo de legalização",
  },
  {
    quote:
      "Ela é extremamente profissional e cuidadosa com cada cliente. Trabalha com dedicação e faz cada pessoa se sentir acolhida.",
    name: "Alireza Mahmoodtorabi",
    detail: "Cliente do gabinete",
  },
  {
    quote:
      "Uma grande profissional. Sua empatia, dedicação e profissionalismo fazem com que a gente se sinta apoiado.",
    name: "Ana Paula O. Ribeiro",
    detail: "Cliente do gabinete",
  },
];

const openingHours = [
  ["Segunda-feira", "10:30–16:00"],
  ["Terça-feira", "10:30–16:00"],
  ["Quarta-feira", "10:30–16:30"],
  ["Quinta-feira", "10:00–14:00"],
  ["Sexta-feira", "Fechado"],
  ["Sábado e domingo", "Fechado"],
];

const navLinks = [
  ["#sobre", "O gabinete"],
  ["#atuacao", "Áreas de atuação"],
  ["#avaliacoes", "Depoimentos"],
  ["#localizacao", "Localização"],
];

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <SiteHeader />

      <section
        id="inicio"
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0e202b] text-white"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            data-parallax="0.22"
            className="absolute inset-x-0 -inset-y-[18%]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/banner.jpg"
              alt=""
              className="hero-zoom h-full w-full object-cover object-center"
            />
          </div>
          <div className="scrim-hero absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 md:px-8">
          <p className="eyebrow hero-in" style={{ "--i": 0 } as React.CSSProperties}>
            Gabinete jurídico · Amadora, Portugal
          </p>
          <h1
            id="hero-title"
            className="display-serif hero-in mt-6 max-w-[800px] text-[clamp(3rem,7.4vw,6.4rem)] leading-[0.98]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Um caminho mais <span className="text-[#e8b77e]">seguro</span> para
            seguir em frente.
          </h1>
          <p
            className="hero-in mt-7 max-w-[500px] text-[15px] leading-7 text-white/75 md:text-base"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Acompanhamento jurídico próximo e personalizado para você, sua
            família e seu negócio em Portugal.
          </p>
          <div
            className="hero-in mt-9 flex flex-wrap items-center gap-3"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold tracking-wide text-white transition hover:bg-white hover:text-ink"
            >
              Converse com nossa equipe
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="https://calendly.com/solicitadora-8139"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/35 px-6 py-4 text-xs font-semibold transition hover:border-white hover:bg-white/10"
            >
              <CalendarBlank size={17} />
              Agende uma conversa
            </a>
          </div>
        </div>

        <a
          href="#atuacao"
          aria-label="Descer para áreas de atuação"
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 transition hover:text-white md:block"
        >
          <ArrowDown size={22} className="scroll-cue" />
        </a>
      </section>

      <section className="border-b border-ink/10 bg-[#f8f8f7]" aria-label="Resumo">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-7 md:grid-cols-4 md:px-8 md:py-8">
          {[
            ["IMIGRAÇÃO", "Um novo começo em Portugal"],
            ["CIVIL", "Segurança nas suas relações"],
            ["EMPRESARIAL", "Apoio para o seu negócio"],
            ["NOTARIAL", "Documentos em boas mãos"],
          ].map(([label, caption], index) => (
            <div
              key={label}
              data-reveal
              style={{ "--i": index } as React.CSSProperties}
              className={`px-3 py-3 md:px-7 ${index < 2 ? "border-b border-ink/10 md:border-b-0" : ""} ${index % 2 === 0 ? "md:border-r md:border-ink/10" : ""} ${index === 1 ? "md:border-r md:border-ink/10" : ""}`}
            >
              <p className="text-[9px] font-bold tracking-[0.19em] text-accent">
                {label}
              </p>
              <p className="mt-2 text-[11px] leading-5 text-ink/75 md:text-xs">
                {caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="atuacao"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl" data-reveal>
            <p className="eyebrow">Como podemos ajudar</p>
            <h2 className="display-serif mt-5 text-4xl leading-[1.08] md:text-5xl">
              Orientação jurídica para o que <i className="text-accent">importa.</i>
            </h2>
          </div>
          <p
            data-reveal
            style={{ "--i": 2 } as React.CSSProperties}
            className="max-w-sm pb-1 text-sm leading-6 text-muted"
          >
            Soluções pensadas para a sua realidade, com clareza desde o primeiro
            contato.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ number, icon: Icon, title, description }, index) => (
            <article
              key={number}
              data-reveal
              style={{ "--i": index % 3 } as React.CSSProperties}
              className="group relative min-h-[235px] overflow-hidden bg-white p-7 transition-colors duration-300 hover:bg-ink sm:p-8"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center bg-[#f6f2ed] text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon size={22} weight="duotone" />
                </span>
                <span className="font-serif text-sm text-muted/70 group-hover:text-white/50">
                  {number}
                </span>
              </div>
              <h3 className="mt-7 font-serif text-[21px] leading-tight transition-colors group-hover:text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-xs text-[13px] leading-6 text-muted transition-colors group-hover:text-white/70">
                {description}
              </p>
              <span className="absolute bottom-8 right-8 text-muted transition group-hover:translate-x-1 group-hover:text-accent">
                <ArrowRight size={17} />
              </span>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-muted">
          Precisa de ajuda em outra área?{" "}
          <a href="#contato" className="font-semibold text-ink underline decoration-accent underline-offset-4">
            Conte-nos sobre o seu caso.
          </a>
        </p>
      </section>

      <section className="bg-[#f8f8f7]" aria-labelledby="imigracao-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink" data-reveal="left">
            <div data-parallax="0.12" className="absolute inset-x-0 -inset-y-[14%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/unsplash/passaporte.jpg"
                alt="Passaporte aberto com carimbos de viagem"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-px -top-px size-20 border-l border-t border-accent" />
          </div>
          <div data-reveal="right">
            <p className="eyebrow">Foco em estrangeiros em Portugal</p>
            <h2
              id="imigracao-title"
              className="display-serif mt-5 text-4xl leading-[1.08] md:text-5xl"
            >
              Direito Internacional Privado com{" "}
              <i className="text-accent">atenção a cada história.</i>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted">
              Vistos, autorizações de residência e nacionalidade exigem
              cuidado com documentos e prazos. Acompanhamos cada etapa para que
              você saiba sempre o que vem a seguir.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs font-semibold transition hover:text-accent"
            >
              Falar sobre o meu processo <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="overflow-hidden bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-[470px]" data-reveal="zoom">
            <div className="absolute -left-5 -top-5 size-24 border-l border-t border-accent/70" />
            <div className="relative aspect-[0.92] overflow-hidden bg-surface">
              <div data-parallax="0.08" className="absolute inset-x-0 -inset-y-[10%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profile.jpg"
                  alt="Retrato da equipe do gabinete jurídico Mendes & Ruthes"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 bg-accent px-5 py-4 text-ink sm:-right-7">
              <p className="font-serif text-2xl">Mendes & Ruthes</p>
              <p className="mt-1 text-[9px] font-bold tracking-[0.2em]">
                GABINETE JURÍDICO
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="eyebrow" data-reveal>Um gabinete perto de você</p>
            <h2
              data-reveal
              style={{ "--i": 1 } as React.CSSProperties}
              className="display-serif mt-5 text-4xl leading-[1.07] text-white md:text-5xl"
            >
              Mais do que orientação: <i className="text-[#e8b77e]">presença</i>{" "}
              em cada decisão.
            </h2>
            <p
              data-reveal
              style={{ "--i": 2 } as React.CSSProperties}
              className="mt-6 text-sm leading-7 text-white/70"
            >
              No Mendes & Ruthes Gabinete Jurídico, acreditamos que cada
              história merece ser ouvida. Atuamos em diferentes áreas do
              Direito, com foco no Direito Internacional Privado e no apoio
              especializado a pessoas estrangeiras em Portugal.
            </p>
            <p
              data-reveal
              style={{ "--i": 3 } as React.CSSProperties}
              className="mt-4 text-sm leading-7 text-white/70"
            >
              Explicamos cada etapa com transparência e construímos, junto com
              você, o caminho mais adequado para a sua situação.
            </p>
            <div
              data-reveal
              style={{ "--i": 4 } as React.CSSProperties}
              className="mt-8 grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-2"
            >
              <div className="flex gap-3">
                <SealCheck className="mt-0.5 shrink-0 text-[#e8b77e]" size={20} />
                <div>
                  <p className="text-xs font-semibold text-white">
                    Atendimento próximo
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Escuta atenta e comunicação clara.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <GlobeHemisphereWest
                  className="mt-0.5 shrink-0 text-[#e8b77e]"
                  size={20}
                />
                <div>
                  <p className="text-xs font-semibold text-white">
                    Visão internacional
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Apoio especializado a estrangeiros em Portugal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="processo"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
      >
        <div className="text-center" data-reveal>
          <p className="eyebrow justify-center">Como funciona</p>
          <h2 className="display-serif mt-5 text-4xl md:text-5xl">
            Três passos para <i className="text-accent">começar.</i>
          </h2>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <div
              key={number}
              data-reveal
              style={{ "--i": index } as React.CSSProperties}
              className="relative px-2 text-center md:px-8"
            >
              {index < steps.length - 1 && (
                <span className="gold-rule absolute left-[calc(50%+3.5rem)] right-[calc(-50%+3.5rem)] top-[3.25rem] hidden md:block" />
              )}
              <p className="font-serif text-[64px] leading-none text-ink/10">
                {number}
              </p>
              <span className="mx-auto -mt-5 flex size-14 items-center justify-center border border-accent/50 bg-white text-accent">
                <Icon size={26} weight="duotone" />
              </span>
              <h3 className="mt-6 font-serif text-[22px]">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-[13px] leading-6 text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-[1.2fr_0.8fr]" data-reveal>
          <div className="relative min-h-[260px] overflow-hidden bg-ink">
            <div data-parallax="0.1" className="absolute inset-x-0 -inset-y-[16%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/unsplash/contrato.jpg"
                alt="Mãos assinando documentos sobre uma mesa"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e202b]/80 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-serif text-2xl leading-tight text-white">
              Documentos em boas mãos, do início ao fim.
            </p>
          </div>
          <div className="flex flex-col justify-center border border-ink/10 bg-[#f8f8f7] p-8">
            <p className="eyebrow">Atendimento</p>
            <p className="mt-4 font-serif text-2xl leading-tight">
              Prefere falar agora?
            </p>
            <a
              href="https://wa.me/351932993461"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-accent"
            >
              <WhatsappLogo size={20} weight="duotone" className="text-accent" />
              WhatsApp · +351 932 993 461
            </a>
          </div>
        </div>
      </section>

      <section
        id="avaliacoes"
        className="bg-[#f8f8f7] px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center" data-reveal>
            <p className="eyebrow justify-center">Quem já esteve conosco</p>
            <h2 className="display-serif mt-5 text-4xl md:text-5xl">
              Palavras que <i className="text-accent">acolhem.</i>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted">
              A confiança de cada pessoa atendida é o que dá sentido ao nosso
              trabalho.
            </p>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <figure
                key={review.name}
                data-reveal
                style={{ "--i": index } as React.CSSProperties}
                className="flex min-h-[250px] flex-col border border-ink/10 border-t-accent bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(37,69,89,0.12)] sm:p-7"
              >
                <div className="flex gap-1 text-accent" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-[17px] leading-7 text-ink">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/10 pt-4">
                  <p className="text-xs font-semibold">{review.name}</p>
                  <p className="mt-1 text-[10px] text-muted">{review.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative flex min-h-[420px] items-center overflow-hidden bg-[#0e202b] text-white"
        aria-label="Chamada para contato"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div data-parallax="0.2" className="absolute inset-x-0 -inset-y-[25%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/unsplash/justice.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="scrim-cta absolute inset-0" />
        </div>
        <div
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8"
          data-reveal
        >
          <h2 className="display-serif max-w-2xl text-4xl leading-[1.08] md:text-5xl">
            Cada caso merece ser <i className="text-[#e8b77e]">ouvido.</i>
          </h2>
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold tracking-wide text-white transition hover:bg-white hover:text-ink"
          >
            Fale com o gabinete
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </section>

      <section id="localizacao" className="bg-[#f7f7f6]">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div data-reveal="left">
            <p className="eyebrow">Estamos na Amadora</p>
            <h2 className="display-serif mt-5 max-w-xl text-4xl leading-tight md:text-5xl">
              Um espaço para conversar com <i className="text-accent">calma.</i>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-muted">
              Estamos prontos para ouvir você. Visite nosso gabinete ou entre
              em contato para agendar seu atendimento.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center bg-white text-accent shadow-sm">
                <MapPin size={22} weight="duotone" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-wide">NOSSO ENDEREÇO</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Rua Elias Garcia, 77B
                  <br />
                  2700-314 Amadora, Portugal
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-ink underline decoration-accent underline-offset-4 transition hover:text-accent"
                  href="https://maps.google.com/?q=Rua+Elias+Garcia+77B+Amadora+Portugal"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver no mapa <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="mt-8 max-w-md border-t border-ink/10 pt-6">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold">
                <Clock size={17} className="text-accent" />
                HORÁRIO DE ATENDIMENTO
              </div>
              <dl className="grid grid-cols-2 gap-y-2 text-xs">
                {openingHours.map(([day, hours]) => (
                  <div key={day} className="contents">
                    <dt className="text-muted">{day}</dt>
                    <dd
                      className={`text-right ${hours === "Fechado" ? "text-muted" : "font-medium text-ink"}`}
                    >
                      {hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div
            data-reveal="right"
            className="relative min-h-[330px] overflow-hidden bg-surface sm:min-h-[440px]"
          >
            <div data-parallax="0.1" className="absolute inset-x-0 -inset-y-[12%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/localization.jpg"
                alt="Fachada do gabinete Mendes & Ruthes na Rua Elias Garcia, na Amadora"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white px-4 py-3 text-xs font-semibold shadow-md">
              <MapPin size={16} className="text-accent" weight="fill" />
              Amadora, Portugal
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden bg-white">
        <div className="absolute -right-20 -top-24 size-80 rounded-full bg-[#f6f2ed] blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal="left">
            <p className="eyebrow">Estamos aqui para ouvir</p>
            <h2 className="display-serif mt-5 text-4xl leading-[1.08] md:text-5xl">
              Vamos dar o <i className="text-accent">próximo passo?</i>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              Conte um pouco sobre o que você precisa. Nossa equipe retorna
              para conversar e entender como podemos ajudar.
            </p>
            <div className="mt-8 space-y-5">
              <a
                href="tel:+351932993461"
                className="flex items-center gap-4 text-sm transition hover:text-accent"
              >
                <span className="flex size-11 items-center justify-center bg-[#f6f2ed] text-accent">
                  <Phone size={19} weight="duotone" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold tracking-[0.14em] text-muted">
                    LIGUE PARA NÓS
                  </span>
                  <span className="mt-1 block font-medium">+351 932 993 461</span>
                </span>
              </a>
              <a
                href="https://wa.me/351932993461"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm transition hover:text-accent"
              >
                <span className="flex size-11 items-center justify-center bg-[#f6f2ed] text-accent">
                  <WhatsappLogo size={20} weight="duotone" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold tracking-[0.14em] text-muted">
                    WHATSAPP
                  </span>
                  <span className="mt-1 block font-medium">
                    Envie uma mensagem
                  </span>
                </span>
              </a>
              <a
                href="https://www.instagram.com/edenaruthes/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm transition hover:text-accent"
              >
                <span className="flex size-11 items-center justify-center bg-[#f6f2ed] text-accent">
                  <InstagramLogo size={20} weight="duotone" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold tracking-[0.14em] text-muted">
                    INSTAGRAM
                  </span>
                  <span className="mt-1 block font-medium">@edenaruthes</span>
                </span>
              </a>
            </div>
            <a
              href="https://calendly.com/solicitadora-8139"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs font-semibold transition hover:text-accent"
            >
              Prefere agendar? Escolha um horário
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div
            data-reveal="right"
            className="border border-ink/10 bg-white p-6 shadow-[0_18px_65px_rgba(37,69,89,0.08)] sm:p-9"
          >
            <div className="mb-7 border-b border-ink/10 pb-5">
              <h3 className="font-serif text-2xl">Envie uma mensagem</h3>
              <p className="mt-2 text-xs leading-5 text-muted">
                Preencha o formulário para continuar a conversa pelo WhatsApp.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-[#0e202b] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_0.7fr_1fr] md:px-8">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center border border-white/30 font-serif text-sm tracking-[-0.1em]">
                M<span className="text-[#e8b77e]">&</span>R
              </span>
              <span>
                <span className="block font-serif text-xs tracking-wide">
                  MENDES & RUTHES
                </span>
                <span className="mt-1 block text-[8px] tracking-[0.22em] text-white/55">
                  GABINETE JURÍDICO
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-xs leading-6 text-white/55">
              Apoio jurídico próximo e personalizado para você, sua família e
              seu negócio em Portugal.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#e8b77e]">
              NAVEGAÇÃO
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-white/70">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#e8b77e]">
              CONTATO
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-white/70">
              <li>Rua Elias Garcia, 77B · 2700-314 Amadora</li>
              <li>
                <a href="tel:+351932993461" className="transition hover:text-white">
                  +351 932 993 461
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/edenaruthes/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  @edenaruthes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[10px] text-white/45 md:flex-row md:justify-between md:px-8">
            <p>
              © {new Date().getFullYear()} Mendes & Ruthes. Todos os direitos
              reservados.
            </p>
            <p>
              Fotos:{" "}
              <a href="https://unsplash.com/photos/DZpc4UY8ZtY" className="underline" target="_blank" rel="noreferrer">
                Tingey Injury Law Firm
              </a>
              ,{" "}
              <a href="https://unsplash.com/photos/OQMZwNd3ThU" className="underline" target="_blank" rel="noreferrer">
                Scott Graham
              </a>
              ,{" "}
              <a href="https://unsplash.com/photos/LPdaW746WAw" className="underline" target="_blank" rel="noreferrer">
                Global Residence Index
              </a>{" "}
              / Unsplash
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
