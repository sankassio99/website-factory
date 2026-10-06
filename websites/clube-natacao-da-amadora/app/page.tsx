import Image from "next/image";
import ScrollEffects from "./ScrollEffects";

const SOURCE = "http://www.natacaoamadora.pt";

const nav = [
  { href: "#piscinas", label: "Piscinas" },
  { href: "#inscricoes", label: "Inscrições" },
  { href: "#clube", label: "O Clube" },
  { href: "#reviews", label: "Reviews" },
  { href: "#energia", label: "Energia" },
  { href: "#contactos", label: "Contactos" },
];

const pools = [
  {
    name: "Alfornelos",
    phone: "935 081 935",
    tel: "+351935081935",
  },
  {
    name: "Reboleira",
    phone: "935 081 278",
    tel: "+351935081278",
  },
];

const facts = [
  { value: "42", label: "anos de atividade ao serviço das populações" },
  { value: "50 000+", label: "utentes e sócios ao longo do percurso" },
  { value: "2", label: "piscinas em funcionamento: Alfornelos e Reboleira" },
];

const reviews = [
  {
    name: "Vitória Luísa",
    details: "9 avaliações · 4 fotos · há um ano",
    text: "Inverno com piscina em temperatura de 28°C, balneário temperatura ambiente e chuveiros quentinhos. Secador para cabelo em perfeito estado. Nada a reclamar, apenas elogiar. ❤️",
  },
  {
    name: "Maria Paula Centrone",
    details: "Local Guide · 9 avaliações · 3 fotos · há 3 anos",
    text: "Fomos muito bem atendidos sobre dúvidas que tínhamos a respeito do nosso filho que tem autismo. Quando houver vagas vamos levar ele para fazer natação. Muito obrigada! Eu e meu esposo comemos sardinhas no restaurante. Muito boas!",
  },
  {
    name: "Luisa Farinha",
    details: "3 avaliações · há um ano",
    text: "Gostei muito. A minha neta pratica lá natação. O Clube tem muito boas condições.",
  },
];

const gallery = [
  { src: "/gallery/piscina-1.webp", alt: "Piscina do Clube Natação da Amadora" },
  { src: "/gallery/piscina-2.webp", alt: "Instalações da piscina do Clube Natação da Amadora" },
  { src: "/gallery/pessoas-1.webp", alt: "Pessoas nas instalações do Clube Natação da Amadora" },
  { src: "/gallery/pessoas-2.webp", alt: "Ambiente do Clube Natação da Amadora" },
];

const linkClass =
  "font-semibold underline decoration-2 underline-offset-4 hover:text-sun-dark";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Saltar para o conteúdo
      </a>

      <header data-header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#" className="flex items-center gap-3" aria-label="Clube Natação da Amadora, início">
            <Image src="/logo-cna.jpg" alt="" width={44} height={45} className="h-11 w-auto" />
            <span className="hidden text-lg font-bold leading-tight sm:block">
              Clube Natação
              <br />
              da Amadora
            </span>
          </a>
          <nav aria-label="Principal" className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="font-medium hover:text-water">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contactos"
            className="rounded-full bg-sun px-5 py-2 font-bold text-ink transition-colors hover:bg-[#f0a043]"
          >
            Contactar secretaria
          </a>
        </div>
        <nav aria-label="Principal (móvel)" className="flex gap-5 overflow-x-auto border-t border-ink/10 px-5 py-2 md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="whitespace-nowrap text-sm font-medium">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="conteudo">
        <section className="waves text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
            <div data-reveal>
              <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold">
                Instituição de Utilidade Pública
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Nadar na Amadora, <span className="text-[#ffb866]">há mais de 40 anos.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/90">
                O Clube Natação da Amadora mantém as piscinas de Alfornelos e da
                Reboleira ao serviço da comunidade, com técnicos credenciados e
                um percurso reconhecido com a Medalha Municipal de Ouro de Mérito
                Desportivo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#inscricoes"
                  className="rounded-full bg-sun px-7 py-3 font-bold text-ink transition-colors hover:bg-[#f0a043]"
                >
                  Ver inscrições
                </a>
                <a
                  href="#piscinas"
                  className="rounded-full border-2 border-white px-7 py-3 font-bold transition-colors hover:bg-white hover:text-ink"
                >
                  As nossas piscinas
                </a>
              </div>
            </div>
            <div data-reveal="zoom" className="float mx-auto w-56 rounded-full bg-white p-3 shadow-2xl md:w-72">
              <Image
                src="/logo-cna.jpg"
                alt="Logótipo do Clube Natação da Amadora: nadador sobre ondas azuis e a sigla CNA"
                width={381}
                height={389}
                priority
                className="h-auto w-full rounded-full"
              />
            </div>
          </div>
        </section>

        <section aria-label="Números do clube" className="bg-aqua">
          <dl className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} data-reveal style={{ "--i": facts.indexOf(f) } as React.CSSProperties} className="text-center">
                <dt className="text-4xl font-extrabold text-deep">{f.value}</dt>
                <dd className="mt-1 text-ink/80">{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="piscinas" className="mx-auto max-w-6xl px-5 py-16">
          <h2 data-reveal className="text-3xl font-extrabold">As piscinas estão a funcionar</h2>
          <p className="mt-3 max-w-2xl text-lg">
            O clube informa que as piscinas de Alfornelos e da Reboleira estão
            abertas e a funcionar com segurança. Cada instalação tem a sua
            secretaria.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pools.map((p) => (
              <article key={p.name} data-reveal={pools.indexOf(p) ? "right" : "left"} className="card-lift rounded-2xl border-2 border-water/30 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-bold text-deep">Piscina de {p.name}</h3>
                <p className="mt-2">Secretaria de {p.name}</p>
                <a
                  href={`tel:${p.tel}`}
                  className="mt-4 inline-flex items-center rounded-full bg-deep px-6 py-3 font-bold text-white transition-colors hover:bg-water"
                >
                  Ligar {p.phone}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="inscricoes" className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 data-reveal className="text-3xl font-extrabold">Inscrições</h2>
            <p className="mt-3 max-w-2xl text-lg text-white/90">
              O site do clube anuncia inscrições abertas em Alfornelos e na
              Reboleira para a época de setembro de 2024 a julho de 2025.
            </p>
            <p className="mt-4 max-w-2xl rounded-xl bg-white/10 p-4 text-white/90">
              Esta informação foi recolhida do site oficial e pode estar
              desatualizada. Confirme a época em curso, os horários e os preços
              diretamente com a secretaria da piscina que lhe interessa.
            </p>
            <a
              href="#contactos"
              className="mt-8 inline-block rounded-full bg-sun px-7 py-3 font-bold text-ink transition-colors hover:bg-[#f0a043]"
            >
              Falar com a secretaria
            </a>
          </div>
        </section>

        <section id="clube" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <div data-reveal="left">
            <h2 className="text-3xl font-extrabold">Um clube feito pela comunidade</h2>
            <p className="mt-4 text-lg">
              A pandemia de COVID-19, o encerramento das piscinas e o aumento
              dos custos de energia foram ameaças à sustentabilidade do clube.
              Graças aos mais de 50 000 utentes e sócios que o acompanharam, o
              Clube Natação da Amadora decidiu lutar e continua o seu trabalho.
            </p>
            <p className="mt-4 text-lg">
              A distinção com a <strong>Medalha Municipal de Ouro de Mérito Desportivo</strong> e
              o estatuto de <strong>Instituição de Utilidade Pública</strong> refletem esse caminho.
            </p>
          </div>
          <div data-reveal="right" className="card-lift rounded-2xl bg-aqua p-8">
            <h3 className="text-2xl font-bold text-deep">Benefícios da natação</h3>
            <p className="mt-3">
              A prática regular de natação, coordenada por técnicos credenciados
              em atividades desportivas com impacto na saúde humana, traz
              benefícios que o clube lembra no seu site.
            </p>
            <a href={`${SOURCE}/beneficios.htm`} className={`mt-5 inline-block text-water ${linkClass}`}>
              Ver no site do clube
            </a>
          </div>
        </section>

        <section id="reviews" className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div data-reveal>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#ffb866]">
                Experiências da comunidade
              </p>
              <h2 className="mt-2 text-3xl font-extrabold">O que dizem sobre o clube</h2>
              <p className="mt-3 max-w-2xl text-lg text-white/85">
                Famílias, atletas e visitantes partilham a sua experiência nas
                piscinas e nas instalações do Clube Natação da Amadora.
              </p>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <article
                  key={review.name}
                  data-reveal={index === 0 ? "left" : index === 2 ? "right" : undefined}
                  className="card-lift flex flex-col rounded-2xl bg-white p-6 text-ink shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-deep">{review.name}</h3>
                      <p className="mt-1 text-sm text-ink/65">{review.details}</p>
                    </div>
                    <span className="text-lg text-sun" aria-label="5 estrelas">
                      ★★★★★
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-relaxed">{review.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <h3 data-reveal className="text-2xl font-bold">Um espaço vivido por todos</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                {gallery.map((photo, index) => (
                  <figure
                    key={photo.src}
                    data-reveal={index % 2 ? "right" : "left"}
                    className="overflow-hidden rounded-2xl bg-white/10"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={1360}
                      height={1020}
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </figure>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/65">
                Fotografias cedidas para utilização no site do Clube Natação da Amadora.
              </p>
            </div>
          </div>
        </section>

        <section id="energia" className="bg-aqua">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 data-reveal className="text-3xl font-extrabold">Eficiência energética</h2>
            <p className="mt-4 max-w-3xl text-lg">
              Para assinalar os 40 anos de atividade, foi instalada na cobertura
              da piscina da Reboleira uma central fotovoltaica de produção de
              eletricidade, com apoio financeiro do IPDJ – Instituto Português
              do Desporto e Juventude.
            </p>
            <a href={`${SOURCE}/Central.htm`} className={`mt-5 inline-block text-water ${linkClass}`}>
              Saber mais no site do clube
            </a>
          </div>
        </section>

        <section id="contactos" className="mx-auto max-w-6xl px-5 py-16">
          <h2 data-reveal className="text-3xl font-extrabold">Contactos</h2>
          <p className="mt-3 text-lg">As secretarias de Alfornelos e da Reboleira estão a funcionar.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {pools.map((p) => (
              <li key={p.name} data-reveal={pools.indexOf(p) ? "right" : "left"} className="card-lift rounded-xl border border-ink/20 p-5">
                <p className="font-bold">Secretaria de {p.name}</p>
                <a href={`tel:${p.tel}`} className="text-2xl font-extrabold text-deep hover:text-water">
                  {p.phone}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            Mais informação e novidades:{" "}
            <a href={SOURCE} className={`text-water ${linkClass}`}>
              natacaoamadora.pt
            </a>
          </p>
        </section>
      </main>

      <footer className="waves text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:justify-between">
          <p>Clube Natação da Amadora · Instituição de Utilidade Pública</p>
          <p>Alfornelos · Reboleira · Amadora</p>
        </div>
      </footer>
    </>
  );
}
