import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import FeaturedArtistsCarousel from '@/components/historia/FeaturedArtistsCarousel';
import archiveData from '@/data/archive.json';
import legacyArtists from '@/data/legacy-artists.json';
import type { ArchiveEdition } from '@/types/festival';

export const metadata: Metadata = {
  title: 'Història',
  description: 'Més de 30 anys de música clàssica. Descobreix la història del Festival Internacional de Música Clàssica Memorial Eduard Casajoana.',
};

export default function HistoriaPage() {
  const editions = (archiveData.editions as ArchiveEdition[])
    .slice()
    .sort((a, b) => b.year - a.year);

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

      {/* Featured Artists Carousel */}
      <section className="py-[60px] md:py-[100px] bg-[var(--color-surface)]">
        <Container>
          <div className="max-w-[800px] mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-[3rem] lg:text-[4rem] font-serif font-light leading-[1.05] tracking-tight text-[var(--color-primary)]">
              Grans noms del Festival
            </h2>
            <p className="text-lg md:text-xl mt-4 max-w-[700px] mx-auto leading-[1.5] font-light text-[var(--color-text-muted)]">
              Més de tres dècades portant figures de referència de la música clàssica
              als escenaris de Sant Fruitós de Bages.
            </p>
          </div>

          <FeaturedArtistsCarousel artists={legacyArtists.featured} />
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Full artist roster */}
      <section className="py-[60px] md:py-[100px]">
        <Container>
          <SectionHeading
            title="Artistes que han passat pel Festival"
            subtitle="Un llistat dels artistes i formacions que han actuat al festival al llarg dels anys."
          />

          <div className="max-w-[1100px] mx-auto space-y-14">
            {legacyArtists.roster.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-5 pb-3 border-b border-[var(--color-border)]">
                  {group.category}
                </h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 text-[15px] text-[var(--color-text-main)]">
                  {group.artists.map((artist) => (
                    <li key={artist} className="leading-relaxed">
                      {artist}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Totes les edicions — plain years list, no links */}
      <section className="py-[60px] md:py-[100px]">
        <Container>
          <SectionHeading
            title="Totes les edicions"
            subtitle="Més de 30 anys de programació musical"
          />

          <div className="max-w-[800px] mx-auto">
            {editions.map((edition) => (
              <div
                key={edition.year}
                className="flex items-center justify-between py-4 border-b border-[var(--color-border)]"
              >
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
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
