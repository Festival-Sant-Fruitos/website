import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import FeaturedArtistsCarousel from '@/components/historia/FeaturedArtistsCarousel';
import legacyArtists from '@/data/legacy-artists.json';

export const metadata: Metadata = {
  title: 'Història',
  description: 'Des de 1995, el Festival Internacional de Música Clàssica porta la millor música a Sant Fruitós de Bages.',
  alternates: { canonical: '/historia/' },
  openGraph: { url: '/historia/' },
};

export default function HistoriaPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-5">
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

      {/* Història text */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[720px] mx-auto">
            <div className="text-lg text-[var(--color-text-muted)] leading-[1.7] space-y-6">
              <p>
                {'La Música, i més concretament la Música Clàssica, ha trobat a Sant Fruitós de Bages un destacat espai de difusió en el marc del \u201CFestival Internacional de Música Clàssica\u201D.'}
              </p>
              <p>
                {'El Festival es celebra des de l\u2019any 1995 com a iniciativa de dos músics afincats a St. Fruitós, la mezzosoprano Mireia Pintó i el pianista Vladislav Bronevetzky, amb l\u2019esperit d\u2019acostar la música clàssica al públic, omplir el buit de la comarca en el camp dels festivals musicals d\u2019estiu i amb un ferm compromís amb el territori i la Cultura.'}
              </p>
              <p>
                {'En una línia de creixement permanent, la consolidació del Festival es deu al reconeixement del públic, de la crítica, així com de la col.laboració de les institucions i també de les empreses i patrocinadors privats. L\u2019Ajuntament de St. Fruitós de Bages recolza fermament el projecte des dels inicis i la Fundació Catalunya-La Pedrera hi suma complicitats des del 2016, any en que el Festival va traslladar la seu dels concerts a Món Sant Benet. D\u2019aquesta manera es sumen la bona música amb la natura i la història del conjunt monumental del Monestir de St. Benet, dins del complex conegut com a Món Sant Benet, pol d\u2019atracció turística de la Catalunya Central. A aquesta conjunció es suma el suport de la Diputació de Barcelona i la Generalitat de Catalunya així com la complicitat teixida amb empreses i patrocinadors privats, i la fidelitat del públic.'}
              </p>
              <p>
                {'Els dijous de juliol es vesteixen doncs de Música i Cultura a St. Fruitós de Bages, amb formacions contrastades i d\u2019alta qualitat, on es troben el talent jove dels Artistes Emergents i el dels artistes de llarga i brillant trajectòria, procurant nits de gaudi, de coneixement, de descoberta i d\u2019exquisidesa musical.'}
              </p>
              <p>
                {'Commoure, inspirar, conèixer nova música, nous intèrprets i així, passar d\u2019observadors i oients a celebrants, amb l\u2019ànim de crear una relació entre l\u2019escenari, la Música, i el públic. Així, el Festival Internacional de Música de St. Fruitós de Bages ha esdevingut un projecte amb personalitat pròpia, motiu de trobades, emocions, de sensibilitat i reflexions, de complicitats, de Cultura i de Música.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Featured Artists Carousel */}
      <section className="py-20 md:py-[120px] bg-[var(--color-surface)]">
        <Container>
          <SectionHeading
            title="Grans noms del Festival"
            subtitle="Més de tres dècades portant figures de referència de la música clàssica als escenaris de Sant Fruitós de Bages."
          />

          <div className="mb-16">
            <FeaturedArtistsCarousel
              artists={legacyArtists.featured.filter((a) => a.orientation !== 'landscape')}
              variant="portrait"
            />
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-secondary)] mb-8">
              Formacions
            </h3>
            <FeaturedArtistsCarousel
              artists={legacyArtists.featured.filter((a) => a.orientation === 'landscape')}
              variant="landscape"
              direction="backward"
            />
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Full artist roster */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <SectionHeading
            title="Artistes que han passat pel Festival"
            subtitle="Un llistat dels artistes i formacions que han actuat al festival al llarg dels anys."
          />

          <div className="max-w-[1100px] space-y-14">
            {legacyArtists.roster.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-secondary)] mb-5 pb-3 border-b border-[var(--color-border)]">
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

    </>
  );
}
