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
      <section className="pt-[10rem] pb-[6rem] bg-[var(--color-primary)]">
        <Container>
          <p className="text-[1.4rem] font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-[2rem]">
            Des de 1995
          </p>
          <h1 className="text-[5.6rem] md:text-[8rem] font-serif font-medium text-white leading-[0.95] mb-[3rem]">
            Història del Festival
          </h1>
          <p className="text-[2rem] text-white/70 max-w-[70rem] leading-[1.4] font-light">
            Més de tres dècades portant la millor música clàssica a Sant Fruitós de Bages.
            Un llegat de cultura i passió.
          </p>
        </Container>
      </section>

      {/* Eduard Casajoana Tribute */}
      <section className="py-[8rem] md:py-[12rem]">
        <Container>
          <div className="max-w-[80rem] mx-auto text-center md:text-left">
            <p className="text-[1.2rem] font-bold tracking-[0.2em] uppercase text-[var(--color-text-light)] mb-[2rem] relative inline-block md:block after:content-[''] after:block after:w-[4rem] after:h-[1px] after:bg-[var(--color-secondary)] after:mx-auto md:after:mx-0 after:mt-[0.8rem]">
              In Memoriam
            </p>
            <h2 className="text-[4rem] md:text-[5.6rem] font-serif font-medium text-[var(--color-primary)] leading-[1.05] mb-[3rem]">
              Eduard Casajoana
            </h2>
            <div className="prose prose-lg text-[var(--color-text-main)]">
              <p className="text-[2rem] font-light leading-relaxed text-[var(--color-text-muted)] mb-[2rem]">
                El Festival Internacional de Música Clàssica porta el nom de Memorial Eduard Casajoana
                en honor a qui va ser un dels grans impulsors de la cultura musical a la comarca del Bages.
              </p>
              <p className="text-[1.6rem] leading-relaxed">
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
      <section className="py-[6rem] md:py-[10rem]">
        <Container>
          <SectionHeading
            title="Fites principals"
            subtitle="Els moments clau de la nostra trajectòria"
          />

          <div className="max-w-[80rem] mx-auto">
            {archiveData.milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex gap-[3rem] py-[3rem] border-b border-[var(--color-border)]"
              >
                <span className="text-[3rem] md:text-[4rem] font-serif font-medium text-[var(--color-secondary)] leading-none w-[12rem] flex-shrink-0">
                  {milestone.year}
                </span>
                <p className="text-[1.6rem] text-[var(--color-text-main)] leading-relaxed pt-[0.6rem]">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <hr />

      {/* Past Editions */}
      <section className="py-[6rem] md:py-[10rem]">
        <Container>
          <SectionHeading
            title="Edicions anteriors"
            subtitle="30 anys de programació musical"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.4rem]">
            {archiveData.editions.map((edition) => (
              <div
                key={edition.year}
                className="border border-[var(--color-border)] p-[2.4rem] hover:border-[var(--color-secondary)] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-[1.2rem]">
                  <div>
                    <p className="text-[2.4rem] font-serif font-medium text-[var(--color-primary)] leading-none">{edition.year}</p>
                    <p className="text-[1.2rem] font-bold tracking-[0.1em] uppercase text-[var(--color-secondary)] mt-[0.6rem]">
                      {edition.edition} Edició
                    </p>
                  </div>
                  <span className="text-[1.2rem] border border-[var(--color-border)] text-[var(--color-text-muted)] px-[1rem] py-[0.4rem]">
                    {edition.concerts} concerts
                  </span>
                </div>
                <p className="text-[1.5rem] text-[var(--color-text-main)] leading-[1.5]">{edition.highlights}</p>
                {edition.pdf && (
                  <a
                    href={edition.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[0.6rem] text-[var(--color-secondary)] text-[1.4rem] font-semibold mt-[1.6rem] hover:text-[var(--color-primary)] transition-colors"
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
