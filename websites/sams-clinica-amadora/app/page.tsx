import Header from "./components/Header";
import ScrollEffects from "./ScrollEffects";

const SPECIALTIES = [
  "Alergologia",
  "Audiofonologia",
  "Cardiologia",
  "Cirurgia Geral",
  "Clínica Geral | Médicos Assistentes",
  "Consulta de apoio à prótese auditiva",
  "Dermatologia",
  "Endocrinologia",
  "Diabetologia",
  "Dietética e Nutrição",
  "Psicologia Clínica",
  "Estomatologia",
  "Estomatologia | Odontopediatria",
  "Estomatologia | Prótese Removível",
  "Ginecologia - Obstetrícia",
  "Oftalmologia",
  "Ortopedia",
  "Otorrinolaringologia",
  "Pediatria",
  "Pediatria | Adolescente",
  "Psiquiatria",
  "Psiquiatria Infantil",
  "Reumatologia",
  "Urologia",
  "Cirurgia Vascular",
  "Cirurgia Vascular | Esclerose de Varizes",
  "Neurologia",
  "Proctologia",
];

const EXAMS = [
  "Análises Clínicas",
  "Anatomia Patológica",
  "Ecocardiograma 2D Modo M",
  "Ecocardiograma 2D Modo M com doppler",
  "Ecodoppler circulação arterial/venoso",
  "Ecodoppler carotídeo",
  "Eletrocardiografia",
  "Fluxometria",
  "MAPA | Holter",
  "Radiologia Dentária",
];

const OTHER_SERVICES = ["Enfermagem", "Ótica"];

const ACCESS_GROUPS = [
  {
    title: "Beneficiários SAMS",
    description: "Titulares inscritos no regime de beneficiários dos SAMS.",
  },
  {
    title: "Utentes Familiares",
    description: "Familiares diretos de beneficiários, nos termos do regulamento SAMS.",
  },
  {
    title: "Acordos e Parcerias",
    description: "Utentes abrangidos por acordos e parcerias institucionais com a SAMS.",
  },
  {
    title: "Seguradoras",
    description: "Utentes de companhias de seguros de saúde com protocolo ativo.",
  },
  {
    title: "Utentes Particulares",
    description: "Também é possível marcar consultas e exames a título particular.",
  },
];

const NEARBY = [
  { label: "Jardim Delfim Guimarães", distance: "20 m" },
  { label: "Estação ferroviária da CP", distance: "80 m" },
  { label: "Parque Central da Amadora", distance: "120 m" },
];

const TRANSPORT = [
  {
    operator: "VIMECA Transportes",
    stop: "Rua Elias Garcia",
    lines: "104, 106, 107, 132, 144, 154, 155, 163, 181",
    distance: "50 m",
  },
  {
    operator: "VIMECA Transportes",
    stop: "Estação CP Amadora (sul)",
    lines: "113, 114, 127, 186",
    distance: "50 m",
  },
  {
    operator: "VIMECA Transportes",
    stop: "Estação CP Amadora (norte)",
    lines: "118, 133, 134, 135, 136, 143",
    distance: "100 m",
  },
  {
    operator: "CP - Comboios de Portugal",
    stop: "Estação Amadora",
    lines: "Linha de Sintra",
    distance: "80 m",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua Elias Garcia 219, 2700-318 Amadora");

function SectionIcon({ path }: { path: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header />

      <main id="inicio" className="overflow-x-clip">
        {/* HERO */}
        <section className="hero-field relative isolate px-5 pt-32 pb-24 text-white md:pt-40 md:pb-32">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide uppercase">
              Rede SAMS · Unidade de Saúde
            </span>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] md:text-6xl">
              Clínica SAMS Amadora
            </h1>
            <p className="max-w-2xl text-lg text-white/85 md:text-xl">
              Cuidados de saúde completos no centro da Amadora: 27 especialidades médicas,
              exames complementares e serviços de suporte, em dias úteis das 08:00 às 20:00.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:clinica.amadora@sams.pt"
                className="btn-press rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[var(--color-accent-dark)]"
              >
                Contactar por email
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-press rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/15"
              >
                Ver localização
              </a>
            </div>
            <div className="mt-6 grid w-full max-w-xl grid-cols-2 gap-4 text-sm text-white/80 sm:grid-cols-3">
              <div>
                <div className="text-2xl font-extrabold text-white">27</div>
                especialidades
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">10</div>
                tipos de exames
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">08h–20h</div>
                dias úteis
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="px-5 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5" data-reveal-group>
            <div className="md:col-span-2" data-reveal="fade">
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
                Sobre a clínica
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl">
                Parte da maior rede privada de saúde em Portugal
              </h2>
            </div>
            <div className="space-y-5 text-[var(--color-muted)] md:col-span-3" data-reveal="fade">
              <p>
                A Clínica SAMS Amadora integra a rede SAMS, o maior subsistema privado de
                saúde do país, gerido pelo Sindicato da Banca, Seguros e Tecnologias — MAIS
                Sindicato. A rede inclui o Hospital SAMS, o Centro Clínico de Lisboa, 17
                clínicas por todo o país, serviço de ótica, parafarmácia e um lar de idosos.
              </p>
              <p>
                O SAMS garante aos seus beneficiários proteção na saúde em complementaridade
                com o Serviço Nacional de Saúde (SNS), prestando também cuidados clínicos a
                utentes particulares, de seguradoras ou ao abrigo de acordos e parcerias.
              </p>
              <p>
                Localizada na Rua Elias Garcia, no centro da cidade, a Clínica SAMS Amadora
                reúne um conjunto alargado de especialidades, exames complementares e
                serviços de enfermagem e ótica, com horário alargado em dias úteis.
              </p>
            </div>
          </div>
        </section>

        {/* QUEM PODE ACEDER */}
        <section id="acesso" className="bg-[var(--color-surface-alt)] px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl" data-reveal-group>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]" data-reveal="fade">
                Quem pode aceder
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl" data-reveal="fade">
                Cuidados abertos a diferentes perfis de utentes
              </h2>
              <p className="mt-4 text-[var(--color-muted)]" data-reveal="fade">
                Se não é beneficiário ou utente dos SAMS, informe-se junto da Clínica SAMS
                Amadora através do email de contacto.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" data-reveal-group>
              {ACCESS_GROUPS.map((group) => (
                <div
                  key={group.title}
                  data-reveal="scale"
                  className="card-lift rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-ink)]">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES */}
        <section id="especialidades" className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl" data-reveal-group>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]" data-reveal="fade">
                Especialidades
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl" data-reveal="fade">
                27 especialidades médicas num só lugar
              </h2>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3" data-reveal-group>
              {SPECIALTIES.map((item) => (
                <li
                  key={item}
                  data-reveal="scale"
                  className="chip rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXAMES & SERVIÇOS */}
        <section id="exames" className="bg-[var(--color-surface-alt)] px-5 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2" data-reveal-group>
            <div data-reveal="fade">
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
                Exames
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[var(--color-ink)] md:text-3xl">
                Exames complementares de diagnóstico
              </h2>
              <ul className="mt-6 space-y-3">
                {EXAMS.map((exam) => (
                  <li key={exam} className="flex items-center gap-3 text-[var(--color-ink)]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    {exam}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal="fade">
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]">
                Outros serviços
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[var(--color-ink)] md:text-3xl">
                Suporte à prestação de cuidados de saúde
              </h2>
              <ul className="mt-6 space-y-3">
                {OTHER_SERVICES.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-[var(--color-ink)]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {service}
                  </li>
                ))}
              </ul>

              <div className="card-lift mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
                <div className="flex items-center gap-3 text-[var(--color-primary)]">
                  <SectionIcon path="M12 7v5l3 3M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-ink)]">
                    Horário de funcionamento
                  </h3>
                </div>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Dias úteis das 08:00 às 20:00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HORÁRIO & LOCALIZAÇÃO */}
        <section id="contacto" className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl" data-reveal-group>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-primary)]" data-reveal="fade">
                Horário &amp; Localização
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl" data-reveal="fade">
                Fácil de encontrar, fácil de chegar
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3" data-reveal-group>
              <div data-reveal="scale" className="card-lift rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-7">
                <div className="flex items-center gap-3 text-[var(--color-primary)]">
                  <SectionIcon path="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-ink)]">
                    Morada
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  Rua Elias Garcia, 219
                  <br />
                  2700-318 Amadora
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                >
                  Ver no mapa →
                </a>
              </div>

              <div data-reveal="scale" className="card-lift rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-7">
                <div className="flex items-center gap-3 text-[var(--color-primary)]">
                  <SectionIcon path="M4 4h16v16H4zM4 9h16M9 4v5" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-ink)]">
                    Referências próximas
                  </h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                  {NEARBY.map((ref) => (
                    <li key={ref.label} className="flex justify-between gap-3">
                      <span>{ref.label}</span>
                      <span className="shrink-0 font-semibold text-[var(--color-ink)]">{ref.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-reveal="scale" className="card-lift rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-7">
                <div className="flex items-center gap-3 text-[var(--color-primary)]">
                  <SectionIcon path="M4 16V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10M6 16h12M8 20h.01M16 20h.01" />
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-ink)]">
                    Contacto
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  <a href="mailto:clinica.amadora@sams.pt" className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                    clinica.amadora@sams.pt
                  </a>
                </p>
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  Para informação sobre acesso enquanto não beneficiário ou utente SAMS,
                  contacte a clínica por este email.
                </p>
              </div>
            </div>

            <div className="mt-6 card-lift rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-7" data-reveal-group>
              <div className="flex items-center gap-3 text-[var(--color-primary)]" data-reveal="fade">
                <SectionIcon path="M3 12h4l3 8 4-16 3 8h4" />
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-ink)]">
                  Acesso por transportes públicos
                </h3>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2" data-reveal="fade">
                {TRANSPORT.map((row) => (
                  <div key={`${row.operator}-${row.stop}`} className="rounded-xl bg-[var(--color-surface)] p-4 text-sm">
                    <p className="font-bold text-[var(--color-ink)]">{row.operator}</p>
                    <p className="text-[var(--color-muted)]">{row.stop} · {row.distance}</p>
                    <p className="mt-1 text-[var(--color-muted)]">Linhas: {row.lines}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] px-5 py-12 text-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-[family-name:var(--font-heading)] text-lg font-extrabold text-white">
              SAMS <span className="text-[var(--color-primary-light)]">Amadora</span>
            </p>
            <p className="mt-3 text-sm">
              Rua Elias Garcia, 219 · 2700-318 Amadora
              <br />
              clinica.amadora@sams.pt
            </p>
          </div>
          <div className="text-sm">
            <p>
              Conteúdo baseado em informação pública do site oficial{" "}
              <a
                href="https://www.sams.pt/UnidadesSaude/ClinicasSAMS/Paginas/ClinicaSAMSAmadora.aspx"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white underline underline-offset-2 hover:text-[var(--color-primary-light)]"
              >
                sams.pt
              </a>
              . Para marcações e informação oficial, consulte sempre a SAMS.
            </p>
            <p className="mt-4 text-xs text-white/50">
              Website independente criado a partir de dados públicos, sem afiliação
              editorial com a SAMS.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
