import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import archiveData from '@/data/archive.json';

export const metadata: Metadata = {
  title: 'Història',
  description: 'Més de 30 anys de música clàssica. Descobreix la història del Festival Internacional de Música Clàssica Memorial Eduard Casajoana.',
};

export default function HistoriaPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-5">
            Des de 1995
          </p>
          <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
            Història del Festival
          </h1>
          <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
            Més de tres dècades portant la millor música clàssica a Sant Fruitós de Bages.
            Un llegat de cultura i passió.
          </p>
        </Container>
      </section>

      {/* Eduard Casajoana Tribute */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[800px] mx-auto text-center md:text-left">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-text-light)] mb-5 relative inline-block md:block after:content-[''] after:block after:w-10 after:h-[1px] after:bg-[var(--color-secondary)] after:mx-auto md:after:mx-0 after:mt-2">
              In Memoriam
            </p>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif font-medium text-[var(--color-primary)] leading-[1.05] mb-[30px]">
              Eduard Casajoana
            </h2>
            <div className="prose prose-lg text-[var(--color-text-main)]">
              <p className="text-xl font-light leading-relaxed text-[var(--color-text-muted)] mb-5">
                El Festival Internacional de Música Clàssica porta el nom de Memorial Eduard Casajoana
                en honor a qui va ser un dels grans impulsors de la cultura musical a la comarca del Bages.
              </p>
              <p className="text-base leading-relaxed">
                Eduard Casajoana va dedicar la seva vida a promoure la música clàssica, convençut que
                l&apos;art és una eina fonamental per al desenvolupament cultural i social de les comunitats.
                El seu llegat perviu en cada edició del festival, que continua la seva missió de fer
                accessible la música clàssica d&apos;excel·lència a tothom.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Milestones */}
      <section className="py-[60px] md:py-[100px]">
        <Container>
          <SectionHeading
            title="Fites principals"
            subtitle="Els moments clau de la nostra trajectòria"
          />

          <div className="max-w-[800px] mx-auto">
            {archiveData.milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex gap-[30px] py-[30px] border-b border-[var(--color-border)]"
              >
                <span className="text-[30px] md:text-[2.5rem] font-serif font-medium text-[var(--color-secondary)] leading-none w-[120px] flex-shrink-0">
                  {milestone.year}
                </span>
                <p className="text-base text-[var(--color-text-main)] leading-relaxed pt-1.5">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <hr />

      {/* Past Editions */}
      <section className="py-[60px] md:py-[100px]">
        <Container>
          <SectionHeading
            title="Edicions anteriors"
            subtitle="30 anys de programació musical"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {archiveData.editions.map((edition) => (
              <div
                key={edition.year}
                className="border border-[var(--color-border)] p-6 hover:border-[var(--color-secondary)] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-2xl font-serif font-medium text-[var(--color-primary)] leading-none">{edition.year}</p>
                    <p className="text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-secondary)] mt-1.5">
                      {edition.edition} Edició
                    </p>
                  </div>
                  <span className="text-xs border border-[var(--color-border)] text-[var(--color-text-muted)] px-2.5 py-1">
                    {edition.concerts} concerts
                  </span>
                </div>
                <p className="text-[15px] text-[var(--color-text-main)] leading-[1.5]">{edition.highlights}</p>
                {edition.pdf && (
                  <a
                    href={edition.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--color-secondary)] text-sm font-semibold mt-4 hover:text-[var(--color-primary)] transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                    </svg>
                    Descarregar programa
                  </a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
