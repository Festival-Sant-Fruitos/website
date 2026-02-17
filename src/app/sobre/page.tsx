import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

export const metadata: Metadata = {
  title: 'Nosaltres | Festival Internacional de Música Clàssica',
  description: "Coneix l'Associació Música Clàssica Memorial Eduard Casajoana i la missió del Festival Internacional de Música Clàssica.",
};

export default function SobrePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[7rem] bg-[var(--color-surface-dark)]">
        <Container className="py-[6rem] md:py-[10rem]">
          <p className="text-[1.4rem] font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-[1.6rem]">
            Qui som
          </p>
          <h1 className="text-[4.8rem] md:text-[6.4rem] lg:text-[8rem] font-bold text-[var(--color-text-inverted)] leading-[1.05]">
            Nosaltres
          </h1>
          <p className="text-[1.9rem] text-[var(--color-text-inverted)]/60 mt-[1.6rem] max-w-[60rem] leading-[1.4]">
            Una passió compartida per la música clàssica d&apos;excel·lència
          </p>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-[6rem] md:py-[10rem]">
        <Container>
          <div className="max-w-[72rem]">
            <SectionHeading
              title="La nostra missió"
              subtitle="Fer accessible la música clàssica de primer nivell a la comarca del Bages"
            />
            <div className="space-y-[2rem] text-[1.9rem] text-[var(--color-text-muted)] leading-[1.6]">
              <p>
                El Festival Internacional de Música Clàssica de Sant Fruitós de Bages neix l&apos;any
                1995 amb la voluntat de portar la millor música clàssica al cor de Catalunya.
                Des de llavors, cada estiu, el festival converteix Mon Sant Benet en un escenari
                privilegiat on la música, la història i la natura es fonen en una experiència única.
              </p>
              <p>
                Amb més de 30 anys de trajectòria, el festival s&apos;ha consolidat com un referent
                cultural a la comarca del Bages i a tot Catalunya. Cada edició reuneix artistes
                nacionals i internacionals de primer nivell, oferint una programació variada que
                abasta des de la música de cambra fins a recitals solistes i grans formacions orquestrals.
              </p>
              <p>
                El festival porta el nom de Memorial Eduard Casajoana en homenatge a qui va ser
                un dels grans impulsors de la vida cultural i musical de la comarca.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Values */}
      <section className="py-[6rem] md:py-[10rem]">
        <Container>
          <SectionHeading title="Els nostres valors" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] max-w-[96rem]">
            <div>
              <p className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-[1.2rem]">
                01
              </p>
              <h3 className="text-[2.4rem] font-bold text-[var(--color-text-main)] mb-[1.2rem]">Excel·lència</h3>
              <p className="text-[1.6rem] text-[var(--color-text-muted)] leading-[1.6]">
                Compromís amb la qualitat artística i la selecció dels millors intèrprets
                de música clàssica nacionals i internacionals.
              </p>
            </div>
            <div>
              <p className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-[1.2rem]">
                02
              </p>
              <h3 className="text-[2.4rem] font-bold text-[var(--color-text-main)] mb-[1.2rem]">Accessibilitat</h3>
              <p className="text-[1.6rem] text-[var(--color-text-muted)] leading-[1.6]">
                La música clàssica ha de ser per a tothom. Treballem per oferir preus
                accessibles i una experiència oberta i acollidora.
              </p>
            </div>
            <div>
              <p className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-[1.2rem]">
                03
              </p>
              <h3 className="text-[2.4rem] font-bold text-[var(--color-text-main)] mb-[1.2rem]">Patrimoni</h3>
              <p className="text-[1.6rem] text-[var(--color-text-muted)] leading-[1.6]">
                Celebrem la música en un entorn patrimonial únic, posant en valor
                la riquesa cultural de Mon Sant Benet i el Bages.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Organization */}
      <section className="py-[6rem] md:py-[10rem]">
        <Container>
          <div className="max-w-[72rem]">
            <SectionHeading
              title="L'organització"
            />
            <div className="space-y-[2.4rem]">
              <div className="border border-[var(--color-border)] p-[3.2rem]">
                <h3 className="text-[2rem] font-bold text-[var(--color-text-main)] mb-[1.2rem]">
                  Associació Música Clàssica Memorial Eduard Casajoana
                </h3>
                <p className="text-[1.6rem] text-[var(--color-text-muted)] leading-[1.6]">
                  L&apos;associació sense ànim de lucre que organitza el festival des dels seus inicis.
                  Formada per un equip de voluntaris apassionats per la música clàssica que
                  dediquen el seu temps i esforç a fer possible cada edició del festival.
                </p>
                <p className="text-[1.4rem] text-[var(--color-text-light)] mt-[1.6rem]">
                  CIF: G-62580303
                </p>
              </div>

              <div className="border border-[var(--color-border)] p-[3.2rem]">
                <h3 className="text-[2rem] font-bold text-[var(--color-text-main)] mb-[1.2rem]">
                  Ajuntament de Sant Fruitós de Bages
                </h3>
                <p className="text-[1.6rem] text-[var(--color-text-muted)] leading-[1.6]">
                  El festival compta amb el suport institucional de l&apos;Ajuntament de
                  Sant Fruitós de Bages, que col·labora activament en la seva organització
                  i promoció com a part del programa cultural del municipi.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Contact */}
      <section id="contacte" className="py-[6rem] md:py-[10rem] scroll-mt-[8rem]">
        <Container>
          <div className="max-w-[72rem]">
            <SectionHeading title="Contacte" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.4rem]">
              <div className="border border-[var(--color-border)] p-[3.2rem]">
                <p className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)] mb-[1.2rem]">
                  Email
                </p>
                <a
                  href="mailto:festivalsantfruitos@gmail.com"
                  className="text-[1.6rem] text-[var(--color-secondary)] font-semibold hover:text-[var(--color-text-main)] transition-colors"
                >
                  festivalsantfruitos@gmail.com
                </a>
              </div>

              <div className="border border-[var(--color-border)] p-[3.2rem]">
                <p className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)] mb-[1.2rem]">
                  Facebook
                </p>
                <a
                  href="https://www.facebook.com/festivalsantfruitos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.6rem] text-[var(--color-secondary)] font-semibold hover:text-[var(--color-text-main)] transition-colors"
                >
                  @festivalsantfruitos
                </a>
              </div>
            </div>

            {/* Press */}
            <div className="border border-[var(--color-border)] p-[3.2rem] mt-[2.4rem]">
              <p className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-[1.2rem]">
                Premsa i mitjans
              </p>
              <p className="text-[1.6rem] text-[var(--color-text-muted)] leading-[1.6]">
                Per a acreditacions de premsa, entrevistes i material gràfic, contacteu-nos
                a{' '}
                <a href="mailto:festivalsantfruitos@gmail.com" className="text-[var(--color-secondary)] hover:text-[var(--color-text-main)] transition-colors"
                >
                  festivalsantfruitos@gmail.com
                </a>{' '}
                amb l&apos;assumpte &quot;Premsa - Festival Música Clàssica&quot;.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
