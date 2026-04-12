import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
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
          {/* Pricing & Tiers */}
          <section className="py-20 md:py-[100px]">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px]">

                {/* Left: General Info & Prices */}
                <div>
                  <SectionHeading
                    title={`Tarifes ${edition.year}`}
                    subtitle="Preus populars per apropar la cultura a tothom"
                    className="mb-10"
                  />

                  <div className="space-y-[30px]">
                    {edition.concerts.map((concert) => (
                      <div key={concert.date} className="flex items-center justify-between gap-6 border-b border-[var(--color-border)] pb-5">
                        <div className="min-w-0">
                          <h3 className="text-xl font-serif font-medium text-[var(--color-primary)]">{concert.title}</h3>
                          <p className="text-sm text-[var(--color-text-muted)] mt-[5px]">{concert.day} de juliol</p>
                        </div>
                        <span className="text-[2rem] font-bold font-sans text-[var(--color-primary)] shrink-0">{concert.price}</span>
                      </div>
                    ))}

                    <div className="bg-[var(--color-surface)] p-[30px] mt-10">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-[15px]">
                        Descomptes i Promocions
                      </h4>
                      <ul className="space-y-2.5 text-[15px] text-[var(--color-text-main)]">
                        <li className="flex items-start gap-2.5">
                          <span className="text-[var(--color-secondary)] font-bold">•</span>
                          <span><strong>Club Regió7:</strong> 2x1 per als socis (venda exclusiva a taquilles)</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[var(--color-secondary)] font-bold">•</span>
                          <span><strong>Grups:</strong> Consultar preus especials per a més de 10 persones</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: Where to buy */}
                <div>
                  <SectionHeading
                    title="Punts de Venda"
                    subtitle="Com aconseguir les teves entrades"
                    className="mb-10"
                  />

                  <div className="grid gap-[30px]">
                    {/* Online Card */}
                    <div className="border border-[var(--color-secondary)] p-10 text-center bg-[var(--color-secondary)]/5">
                      <h3 className="text-2xl font-serif font-medium text-[var(--color-primary)] mb-2.5">
                        Venda Online
                      </h3>
                      <p className="text-base text-[var(--color-text-muted)] mb-[30px]">
                        Compra immediata i segura a través de CodeTickets.
                        Sense cues i amb confirmació a l&apos;instant.
                      </p>
                      <Button
                        href="https://entradas.codetickets.com/entradas/festivalinternacionalmusicaclassica/online"
                        external
                        variant="primary"
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        Comprar Entrades Ara
                      </Button>
                    </div>

                    {/* Physical Points */}
                    <div className="grid grid-cols-1 gap-5">
                      <div className="border border-[var(--color-border)] p-6">
                        <h4 className="text-base font-bold text-[var(--color-primary)] mb-[5px]">Sant Fruitós de Bages</h4>
                        <p className="text-[15px] font-bold text-[var(--color-text-main)]">Joanan33@ (Antic Foto Isidre)</p>
                        <p className="text-sm text-[var(--color-text-muted)] mt-[5px]">Ctra. de Vic, 44</p>
                        <p className="text-xs text-[var(--color-text-light)] mt-2.5 uppercase tracking-wide">Botiga</p>
                      </div>
                      <div className="border border-[var(--color-border)] p-6">
                        <h4 className="text-base font-bold text-[var(--color-primary)] mb-[5px]">Manresa</h4>
                        <p className="text-[15px] font-bold text-[var(--color-text-main)]">Taquilles Teatre Kursaal</p>
                        <p className="text-sm text-[var(--color-text-muted)] mt-[5px]">Passeig de Pere III, 35</p>
                        <p className="text-xs text-[var(--color-text-light)] mt-2.5 uppercase tracking-wide">Taquilles</p>
                      </div>
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
                   En cas de pluja, el concert es trasllada a un espai cobert dins de Món Sant Benet. L&apos;espai exacte s&apos;anunciarà a les xarxes socials. Les entrades mantenen la seva validesa.
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
