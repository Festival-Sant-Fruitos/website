import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import ComingSoon from '@/components/shared/ComingSoon';
import { getCurrentEdition } from '@/lib/festival';

const edition = getCurrentEdition();

export const metadata: Metadata = {
  title: 'Entrades',
  description: `Compra les entrades pel Festival Internacional de Música Clàssica ${edition.year}. Preus, punts de venda i informació.`,
};

export default function EntradesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-5">
            Juliol {edition.year}
          </p>
          <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
            Entrades
          </h1>
          <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
            {edition.revealed
              ? <>Assegura la teva plaça per a les vetllades musicals més especials de l&apos;estiu. Venda online i presencial.</>
              : <>La venda d&apos;entrades s&apos;obrirà quan s&apos;anunciï la programació. Segueix-nos per estar al dia.</>
            }
          </p>
        </Container>
      </section>

      {edition.revealed ? (
        <>
          {/* Concerts with per-concert buy buttons */}
          <section className="py-20 md:py-[100px]">
            <Container>
              <div className="max-w-[900px] mx-auto">
                <div className="mb-12 text-center">
                  <h2 className="text-2xl md:text-[3rem] lg:text-[4rem] font-serif font-light leading-[1.05] tracking-tight text-[var(--color-primary)]">
                    Concerts {edition.year}
                  </h2>
                  <p className="text-lg md:text-xl mt-4 max-w-[600px] mx-auto leading-[1.5] font-light text-[var(--color-text-muted)]">
                    Tria el concert i compra les entrades directament
                  </p>
                </div>

                <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
                  {edition.concerts.map((concert) => (
                    <div
                      key={concert.date}
                      className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 py-6 md:py-8"
                    >
                      <div className="flex items-baseline gap-4 md:w-[140px] shrink-0">
                        <span className="text-[2.5rem] md:text-[3rem] font-serif font-medium text-[var(--color-secondary)] leading-none">
                          {concert.day}
                        </span>
                        <span className="text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
                          {concert.month}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-serif font-medium text-[var(--color-primary)] leading-tight">
                          {concert.title}
                        </h3>
                        {concert.subtitle && (
                          <p className="text-sm text-[var(--color-text-muted)] mt-1 font-light">
                            {concert.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-5 md:gap-6 md:ml-auto">
                        <span className="text-2xl font-bold font-sans text-[var(--color-primary)]">
                          {concert.price}
                        </span>
                        <Button
                          href={concert.ticketUrl}
                          external
                          variant="primary"
                          size="sm"
                        >
                          Comprar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          <hr className="border-[var(--color-border)]" />

          {/* Punts de Venda */}
          <section className="py-20 md:py-[100px] bg-[var(--color-surface)]">
            <Container>
              <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-14">
                  <h2 className="text-2xl md:text-[3rem] lg:text-[4rem] font-serif font-light leading-[1.05] tracking-tight text-[var(--color-primary)]">
                    Punts de venda presencials
                  </h2>
                  <p className="text-lg md:text-xl mt-4 max-w-[600px] mx-auto leading-[1.5] font-light text-[var(--color-text-muted)]">
                    Com aconseguir les teves entrades
                  </p>
                </div>

                {/* Presencial grid */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="border border-[var(--color-border)] bg-white p-6">
                      <h4 className="text-base font-bold text-[var(--color-primary)] mb-1">Sant Fruitós de Bages</h4>
                      <p className="text-[15px] font-bold text-[var(--color-text-main)]">Joanan33@ (antic Foto Isidre)</p>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">Carretera de Vic, 44</p>
                      <p className="text-xs text-[var(--color-text-light)] mt-2.5 uppercase tracking-wide">Botiga</p>
                    </div>
                    <div className="border border-[var(--color-border)] bg-white p-6">
                      <h4 className="text-base font-bold text-[var(--color-primary)] mb-1">Manresa</h4>
                      <p className="text-[15px] font-bold text-[var(--color-text-main)]">Taquilles Teatre Kursaal</p>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">Passeig de Pere III, 35</p>
                      <p className="text-xs text-[var(--color-text-light)] mt-2.5 uppercase tracking-wide">Taquilles</p>
                    </div>
                    <div className="border border-[var(--color-border)] bg-white p-6">
                      <h4 className="text-base font-bold text-[var(--color-primary)] mb-1">Club Regió7</h4>
                      <p className="text-[15px] font-bold text-[var(--color-text-main)]">2x1 per als socis</p>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">Venda exclusiva per a subscriptors</p>
                      <p className="text-xs text-[var(--color-text-light)] mt-2.5 uppercase tracking-wide">Promoció</p>
                    </div>
                    <div className="border border-[var(--color-border)] bg-white p-6">
                      <h4 className="text-base font-bold text-[var(--color-primary)] mb-1">A l&apos;entrada del concert</h4>
                      <p className="text-[15px] font-bold text-[var(--color-text-main)]">Món Sant Benet</p>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">Segons disponibilitat, a partir de les 21:15h</p>
                      <p className="text-xs text-[var(--color-text-light)] mt-2.5 uppercase tracking-wide">El dia del concert</p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <hr className="border-[var(--color-border)]" />
        </>
      ) : (
        /* Teaser — shared ComingSoon pattern */
        <ComingSoon
          eyebrow={`Entrades · Juliol ${edition.year}`}
          description="La venda d'entrades s'obrirà quan es publiqui el programa. Segueix-nos a xarxes socials per ser dels primers en saber-ho."
        />
      )}

      {/* FAQ Section — always visible */}
      <section className="py-20">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[2rem] font-serif font-medium text-[var(--color-primary)] mb-10 text-center">
              Dubtes freqüents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <div>
                 <h4 className="text-lg font-medium text-[var(--color-primary)] mb-2.5">Venda el dia del concert</h4>
                 <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                   Si queden entrades disponibles, es podran adquirir a l'entrada de Món Sant Benet a partir de les 21:15h.
                 </p>
               </div>
               <div>
                 <h4 className="text-lg font-medium text-[var(--color-primary)] mb-2.5">Política de devolucions</h4>
                 <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                   No s&apos;admeten canvis ni devolucions, excepte en cas de cancel·lació total de l&apos;esdeveniment.
                 </p>
               </div>
               <div>
                 <h4 className="text-lg font-medium text-[var(--color-primary)] mb-2.5">Pla de pluja</h4>
                 <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                   En cas de pluja, si és possible, el concert es trasllada a un espai cobert dins de Món Sant Benet. L&apos;espai exacte s&apos;anunciarà a les xarxes socials. Les entrades mantenen la seva validesa.
                 </p>
               </div>
               <div>
                 <h4 className="text-lg font-medium text-[var(--color-primary)] mb-2.5">Obertura de portes</h4>
                 <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                   L&apos;accés al recinte s&apos;obre 1 hora abans de l&apos;inici del concert (21:15h). Hi ha servei de bar.
                 </p>
               </div>
               <div>
                 <h4 className="text-lg font-medium text-[var(--color-primary)] mb-2.5">Accessibilitat</h4>
                 <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                   El recinte és accessible per a persones amb mobilitat reduïda. Preguem avisar amb antelació.
                 </p>
               </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
