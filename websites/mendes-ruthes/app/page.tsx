import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CalendarBlank,
  Clock,
  FileText,
  GlobeHemisphereWest,
  Handshake,
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

const openingHours = [
  ["Segunda-feira", "10:30–16:00"],
  ["Terça-feira", "10:30–16:00"],
  ["Quarta-feira", "10:30–16:30"],
  ["Quinta-feira", "10:00–14:00"],
  ["Sexta-feira", "Fechado"],
  ["Sábado e domingo", "Fechado"],
];

export default function Home() {
  return (
    <main>
      <div className="hidden bg-ink text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2.5 text-[11px] tracking-wide">
          <span className="flex items-center gap-2 text-white/80">
            <MapPin size={14} weight="fill" className="text-accent" />
            Rua Elias Garcia, 77B · Amadora, Portugal
          </span>
          <a
            href="tel:+351932993461"
            className="flex items-center gap-2 text-white/85 transition hover:text-white"
          >
            <Phone size={14} weight="fill" className="text-accent" />
            +351 932 993 461
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/95 backdrop-blur">
        <div className="text-white mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
          <a
            className="group flex items-center gap-3"
            href="#inicio"
            aria-label="Mendes e Ruthes, início"
          >
            <span className="flex size-11 items-center justify-center border border-ink/20 font-serif text-[17px] tracking-[-0.1em] text-ink transition group-hover:border-accent">
              M<span className="text-accent">&</span>R
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-[15px] tracking-wide">
                MENDES <span className="text-accent">&</span> RUTHES
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.24em] text-muted">
                GABINETE JURÍDICO
              </span>
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 text-[12px] font-medium text-ink/80 lg:flex"
          >
            <a className="transition hover:text-accent" href="#sobre">
              O gabinete
            </a>
            <a className="transition hover:text-accent" href="#atuacao">
              Áreas de atuação
            </a>
            <a className="transition hover:text-accent" href="#avaliacoes">
              Depoimentos
            </a>
            <a className="transition hover:text-accent" href="#localizacao">
              Localização
            </a>
          </nav>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-white bg-ink px-4 py-3 text-[11px] font-semibold tracking-wide transition hover:bg-accent sm:px-5"
          >
            Fale conosco
            <ArrowUpRight size={15} weight="bold" />
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-white"
        aria-labelledby="hero-title"
      >
        <div className="image-grain pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] opacity-50 lg:block" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:pb-28 lg:pt-24">
          <div className="relative z-10">
            <p className="eyebrow">Gabinete jurídico · Amadora, Portugal</p>
            <h1
              id="hero-title"
              className="display-serif mt-6 max-w-[650px] text-[clamp(3.35rem,7vw,6rem)] leading-[0.99] text-ink"
            >
              Um caminho mais <span className="text-accent">seguro</span> para
              seguir em frente.
            </h1>
            <p className="mt-6 max-w-[480px] text-[15px] leading-7 text-muted md:text-base">
              Acompanhamento jurídico próximo e personalizado para você, sua
              família e seu negócio em Portugal.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-3 bg-accent px-6 py-4 text-xs font-semibold tracking-wide text-white transition hover:bg-ink"
              >
                Converse com nossa equipe
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="https://calendly.com/solicitadora-8139"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-4 text-xs font-semibold text-ink transition hover:text-accent"
              >
                <CalendarBlank size={17} />
                Agende uma conversa
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-ink/10 pt-5">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#f3f2f0] text-accent">
                <SealCheck size={19} weight="duotone" />
              </span>
              <p className="text-xs leading-5 text-muted">
                Orientação clara. Atendimento humano.
                <span className="block font-semibold text-ink">
                  Ao seu lado em cada etapa.
                </span>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="hero-image relative min-h-[390px] overflow-hidden sm:min-h-[470px] lg:min-h-[550px]">
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-white/75">
                  MENDES & RUTHES
                </p>
                <p className="mt-2 max-w-md font-serif text-2xl leading-tight sm:text-3xl">
                  O próximo capítulo começa com orientação.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 border border-ink/10 bg-white px-4 py-3 shadow-[0_14px_50px_rgba(37,69,89,0.12)] sm:bottom-8 sm:-left-8 sm:px-5 sm:py-4">
              <span className="flex size-10 items-center justify-center bg-[#f6f2ed] text-accent">
                <Handshake size={22} weight="duotone" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-ink">
                  Atendimento personalizado
                </span>
                <span className="mt-1 block text-[10px] text-muted">
                  Para particulares e empresas
                </span>
              </span>
            </div>
            <span className="absolute -right-3 -top-3 hidden size-20 border-r border-t border-accent/60 sm:block" />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-[#f8f8f7]" aria-label="Resumo">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-7 md:grid-cols-4 md:px-8 md:py-8">
          {[
            ["IMIGRAÇÃO", "Um novo começo em Portugal"],
            ["CIVIL", "Segurança nas suas relações"],
            ["EMPRESARIAL", "Apoio para o seu negócio"],
            ["NOTARIAL", "Documentos em boas mãos"],
          ].map(([label, caption], index) => (
            <div
              key={label}
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
          <div className="max-w-2xl">
            <p className="eyebrow">Como podemos ajudar</p>
            <h2 className="display-serif mt-5 text-4xl leading-[1.08] md:text-5xl">
              Orientação jurídica para o que <i className="text-accent">importa.</i>
            </h2>
          </div>
          <p className="max-w-sm pb-1 text-sm leading-6 text-muted">
            Soluções pensadas para a sua realidade, com clareza desde o primeiro
            contato.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ number, icon: Icon, title, description }) => (
            <article
              key={number}
              className="group relative min-h-[235px] bg-white p-7 transition-colors hover:bg-[#f8f8f7] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center bg-[#f6f2ed] text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon size={22} weight="duotone" />
                </span>
                <span className="font-serif text-sm text-muted/70">{number}</span>
              </div>
              <h3 className="mt-7 font-serif text-[21px] leading-tight">
                {title}
              </h3>
              <p className="mt-3 max-w-xs text-[13px] leading-6 text-muted">
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

      <section id="sobre" className="overflow-hidden bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -left-5 -top-5 size-24 border-l border-t border-accent/70" />
            <div className="relative aspect-[0.92] overflow-hidden bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Retrato da equipe do gabinete jurídico Mendes & Ruthes"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 bg-accent px-5 py-4 text-ink sm:-right-7">
              <p className="font-serif text-2xl">Mendes & Ruthes</p>
              <p className="mt-1 text-[9px] font-bold tracking-[0.2em]">
                GABINETE JURÍDICO
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="eyebrow">Um gabinete perto de você</p>
            <h2 className="display-serif mt-5 text-4xl leading-[1.07] text-white md:text-5xl">
              Mais do que orientação: <i className="text-[#e8b77e]">presença</i>{" "}
              em cada decisão.
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/70">
              No Mendes & Ruthes Gabinete Jurídico, acreditamos que cada
              história merece ser ouvida. Atuamos em diferentes áreas do
              Direito, com foco no Direito Internacional Privado e no apoio
              especializado a pessoas estrangeiras em Portugal.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Explicamos cada etapa com transparência e construímos, junto com
              você, o caminho mais adequado para a sua situação.
            </p>
            <div className="mt-8 grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-2">
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
        id="avaliacoes"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
      >
        <div className="text-center">
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
          {[
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
          ].map((review) => (
            <figure
              key={review.name}
              className="flex min-h-[250px] flex-col border border-ink/10 bg-white p-6 sm:p-7"
            >
              <div className="flex gap-1 text-accent" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} aria-hidden="true">
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
      </section>

      <section id="localizacao" className="bg-[#f7f7f6]">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
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
          <div className="relative min-h-[330px] overflow-hidden bg-surface sm:min-h-[440px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/localization.jpg"
              alt="Fachada do gabinete Mendes & Ruthes na Rua Elias Garcia, na Amadora"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
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
          <div>
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

          <div className="border border-ink/10 bg-white p-6 shadow-[0_18px_65px_rgba(37,69,89,0.08)] sm:p-9">
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

      <footer className="bg-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
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
          <p className="text-[10px] text-white/55">
            © {new Date().getFullYear()} Mendes & Ruthes. Todos os direitos reservados.
          </p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 text-[10px] font-semibold text-white/75 transition hover:text-white"
          >
            Voltar ao início <ArrowDown size={14} className="rotate-180" />
          </a>
        </div>
      </footer>
    </main>
  );
}
