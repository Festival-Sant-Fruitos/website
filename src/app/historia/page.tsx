import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import archiveData from '@/data/archive.json';
import type { ArchiveEdition } from '@/types/festival';

export const metadata: Metadata = {
  title: 'Història',
  description: 'Més de 30 anys de música clàssica. Descobreix la història del Festival Internacional de Música Clàssica Memorial Eduard Casajoana.',
};

const FEATURED_YEARS = [2025, 2024, 2023, 2022, 2021];

export default function HistoriaPage() {
  const editions = archiveData.editions as ArchiveEdition[];
  const featuredEditions = editions.filter((e) =>
    FEATURED_YEARS.includes(e.year)
  );
  const olderEditions = editions.filter(
    (e) => !FEATURED_YEARS.includes(e.year)
  );

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

      <hr className="border-[var(--color-border)]" />

      {/* Featured Recent Editions */}
      <section className="py-[60px] md:py-[100px]">
        <Container>
          <SectionHeading
            title="Edicions recents"
            subtitle="Descobreix les darreres programacions del festival"
          />

          <div className="space-y-6">
            {/* First edition: full width */}
            {featuredEditions[0] && (
              <Link
                href={`/historia/${featuredEditions[0].year}`}
                className="group block relative overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-gray-100"
              >
                {featuredEditions[0].image && (
                  <Image
                    src={featuredEditions[0].image}
                    alt={`${featuredEditions[0].edition} Edició`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-2">
                    {featuredEditions[0].edition} Edició
                  </p>
                  <h3 className="text-[2rem] md:text-[3rem] font-serif font-medium text-white leading-[1.05] mb-3">
                    Festival {featuredEditions[0].year}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 max-w-[600px] leading-relaxed">
                    {featuredEditions[0].highlights}
                  </p>
                  <p className="text-[var(--color-secondary)] text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform duration-300">
                    Veure programa complet &rarr;
                  </p>
                </div>
              </Link>
            )}

            {/* Remaining featured: 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredEditions.slice(1).map((edition) => {
                const hasDetails = edition.concertDetails && edition.concertDetails.length > 0;

                const cardContent = (
                  <>
                    {edition.image && (
                      <Image
                        src={edition.image}
                        alt={`${edition.edition} Edició`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-1.5">
                        {edition.edition} Edició
                      </p>
                      <h3 className="text-xl md:text-2xl font-serif font-medium text-white leading-[1.1] mb-2">
                        Festival {edition.year}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                        {edition.highlights}
                      </p>
                      {hasDetails && (
                        <p className="text-[var(--color-secondary)] text-sm font-semibold mt-3 group-hover:translate-x-1 transition-transform duration-300">
                          Veure programa complet &rarr;
                        </p>
                      )}
                    </div>
                  </>
                );

                if (hasDetails) {
                  return (
                    <Link
                      key={edition.year}
                      href={`/historia/${edition.year}`}
                      className="group block relative overflow-hidden aspect-[16/10] bg-gray-100"
                    >
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div
                    key={edition.year}
                    className="block relative overflow-hidden aspect-[16/10] bg-gray-100"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Older Editions - Minimal */}
      <section className="py-[60px] md:py-[100px]">
        <Container>
          <SectionHeading
            title="Totes les edicions"
            subtitle="Més de 30 anys de programació musical"
          />

          <div className="max-w-[800px] mx-auto">
            {olderEditions.map((edition) => {
              const hasDetails = edition.concertDetails && edition.concertDetails.length > 0;

              const content = (
                <div className="flex items-center justify-between py-4 border-b border-[var(--color-border)]">
                  <div className="flex items-center gap-5">
                    <span className="text-2xl font-serif font-medium text-[var(--color-primary)] w-[60px]">
                      {edition.year}
                    </span>
                    <div>
                      <span className="text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-secondary)]">
                        {edition.edition} Edició
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)] ml-3">
                        {edition.concerts} concerts
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {hasDetails && (
                      <span className="text-[var(--color-secondary)] text-sm font-semibold">
                        &rarr;
                      </span>
                    )}
                  </div>
                </div>
              );

              if (hasDetails) {
                return (
                  <Link key={edition.year} href={`/historia/${edition.year}`} className="block hover:bg-[var(--color-surface)] transition-colors duration-200">
                    {content}
                  </Link>
                );
              }

              return (
                <div key={edition.year}>
                  {content}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
