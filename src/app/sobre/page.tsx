import type { Metadata } from 'next';
import Image from 'next/image';
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
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-4">
            Qui som
          </p>
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-serif font-medium text-[var(--color-text-inverted)] leading-[1.05]">
            Nosaltres
          </h1>
          <p className="text-xl text-[var(--color-text-inverted)]/60 mt-4 max-w-[600px] leading-[1.4]">
            Una passió compartida per la música clàssica d&apos;excel·lència
          </p>
        </Container>
      </section>

      {/* Festival atmosphere image */}
      <section className="relative aspect-[21/9] overflow-hidden">
        <Image
          src="/images/concerts/gallery/artists-bow.jpg"
          alt="Artistes saludant el públic al final d'un concert"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </section>

      {/* Mission */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[720px]">
            <SectionHeading
              title="La nostra missió"
              subtitle="Fer accessible la música clàssica de primer nivell a la comarca del Bages"
            />
            <div className="space-y-5 text-lg text-[var(--color-text-muted)] leading-[1.6]">
              <p>
                El Festival Internacional de Música Clàssica de Sant Fruitós de Bages neix l&apos;any
                1995 amb la voluntat de portar la millor música clàssica al cor de Catalunya.
                Des de llavors, cada estiu, el festival converteix Món Sant Benet en un escenari
                privilegiat on la música, la història i la natura es fonen en una experiència única.
              </p>
              <p>
                Amb més de 30 anys de trajectòria, el festival s&apos;ha consolidat com un referent
                cultural a la comarca del Bages i a tot Catalunya. Cada edició reuneix artistes
                nacionals i internacionals de primer nivell, oferint una programació variada que
                abasta des de la música de cambra fins a recitals solistes i grans formacions orquestrals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Values */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <SectionHeading title="Els nostres valors" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[960px]">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-3">
                01
              </p>
              <h3 className="text-2xl font-medium text-[var(--color-text-main)] mb-3">Excel·lència</h3>
              <p className="text-base text-[var(--color-text-muted)] leading-[1.6]">
                Compromís amb la qualitat artística i la selecció dels millors intèrprets
                de música clàssica nacionals i internacionals.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-3">
                02
              </p>
              <h3 className="text-2xl font-medium text-[var(--color-text-main)] mb-3">Accessibilitat</h3>
              <p className="text-base text-[var(--color-text-muted)] leading-[1.6]">
                La música clàssica ha de ser per a tothom. Treballem per oferir preus
                accessibles i una experiència oberta i acollidora.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-3">
                03
              </p>
              <h3 className="text-2xl font-medium text-[var(--color-text-main)] mb-3">Patrimoni</h3>
              <p className="text-base text-[var(--color-text-muted)] leading-[1.6]">
                Celebrem la música en un entorn patrimonial únic, posant en valor
                la riquesa cultural de Món Sant Benet i el Bages.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Organization */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[720px]">
            <SectionHeading
              title="Qui som"
            />
            <div className="relative aspect-[16/10] overflow-hidden mb-10">
              <Image
                src="/images/concerts/gallery/post-concert-social.jpg"
                alt="Públic socialitzant després d'un concert"
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="border border-[var(--color-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-5">
                  Associació Memorial Eduard Casajoana
                </h3>
                <div className="space-y-5 text-base text-[var(--color-text-muted)] leading-[1.6]">
                  <p>
                    És l&apos;Associació sense ànim de lucre que organitza el Festival.
                  </p>
                  <p>
                    Amb més de 30 anys de concerts com a bagatge d&apos;experiència, de projectes,
                    d&apos;il·lusions, d&apos;entusiasme, molta implicació i esforç, l&apos;Associació
                    treballa per l&apos;excel·lència a través de la Cultura i la Música. Ja són més
                    de 30 juliols de grans artistes, de complicitats, de col·laboracions i empaties
                    que ens han fet prescriptors de formats i d&apos;idees, sempre amb l&apos;afany
                    de compartir l&apos;estima i el gaudi de la música clàssica d&apos;una manera
                    sincera i propera. Havent esdevingut un Festival de referència i trajectòria,
                    reconeguts pels mitjans professionals i la premsa especialitzada, seguim
                    treballant per renovar-nos, any rere any.
                  </p>
                  <p>
                    Amb la participació de tots, artistes, públic, institucions i empreses, escrivim
                    la història del patrimoni cultural de la nostra comarca i del nostre territori.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Contact */}
      <section id="contacte" className="py-20 md:py-[120px] scroll-mt-20">
        <Container>
          <div className="max-w-[720px]">
            <SectionHeading title="Contacte" />

            <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              <a
                href="mailto:festivalsantfruitos@gmail.com"
                className="flex items-center justify-between py-5 group"
              >
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)]">Email</span>
                <span className="text-sm text-[var(--color-text-main)] group-hover:text-[var(--color-secondary)] transition-colors">
                  festivalsantfruitos@gmail.com
                </span>
              </a>
              <a
                href="https://www.facebook.com/festivalsantfruitos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-5 group"
              >
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)]">Facebook</span>
                <span className="text-sm text-[var(--color-text-main)] group-hover:text-[var(--color-secondary)] transition-colors">
                  @festivalsantfruitos
                </span>
              </a>
              <a
                href="https://www.instagram.com/festivalsantfruitos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-5 group"
              >
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)]">Instagram</span>
                <span className="text-sm text-[var(--color-text-main)] group-hover:text-[var(--color-secondary)] transition-colors">
                  @festivalsantfruitos
                </span>
              </a>
            </div>

            {/* Press */}
            <div className="border border-[var(--color-border)] p-8 mt-6">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-secondary)] mb-3">
                Premsa i mitjans
              </p>
              <p className="text-base text-[var(--color-text-muted)] leading-[1.6]">
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
