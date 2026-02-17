import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import concertData from '@/data/concerts.json';

export const metadata: Metadata = {
  title: 'Entrades',
  description: 'Compra les entrades pel Festival Internacional de Música Clàssica 2025. Preus, punts de venda i informació.',
};

export default function EntradesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[10rem] pb-[6rem] bg-[var(--color-primary)]">
        <Container>
          <p className="text-[1.4rem] font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-[2rem]">
            Juliol {concertData.year}
          </p>
          <h1 className="text-[5.6rem] md:text-[8rem] font-serif font-medium text-white leading-[0.95] mb-[3rem]">
            Entrades
          </h1>
          <p className="text-[2rem] text-white/70 max-w-[70rem] leading-[1.4] font-light">
            Assegura la teva plaça per a les vetllades musicals més especials de l&apos;estiu.
            Venda online i presencial.
          </p>
        </Container>
      </section>

      {/* Pricing & Tiers */}
      <section className="py-[8rem] md:py-[10rem]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6rem] lg:gap-[10rem]">
            
            {/* Left: General Info & Prices */}
            <div>
              <SectionHeading 
                title="Tarifes 2025" 
                subtitle="Preus populars per apropar la cultura a tothom"
                className="mb-[4rem]"
              />
              
              <div className="space-y-[3rem]">
                <div className="flex items-baseline justify-between border-b border-[var(--color-border)] pb-[2rem]">
                  <div>
                    <h3 className="text-[2rem] font-serif font-medium text-[var(--color-primary)]">Entrada General</h3>
                    <p className="text-[1.4rem] text-[var(--color-text-muted)] mt-[0.5rem]">Seient no numerat a zona general</p>
                  </div>
                  <span className="text-[3.2rem] font-bold text-[var(--color-primary)]">25€</span>
                </div>
                
                <div className="flex items-baseline justify-between border-b border-[var(--color-border)] pb-[2rem]">
                  <div>
                    <h3 className="text-[2rem] font-serif font-medium text-[var(--color-primary)]">Entrada Preferent</h3>
                    <p className="text-[1.4rem] text-[var(--color-text-muted)] mt-[0.5rem]">Seient a les primeres files</p>
                  </div>
                  <span className="text-[3.2rem] font-bold text-[var(--color-secondary)]">30€</span>
                </div>

                <div className="bg-[var(--color-surface)] p-[3rem] mt-[4rem]">
                  <h4 className="text-[1.4rem] font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-[1.5rem]">
                    Descomptes i Promocions
                  </h4>
                  <ul className="space-y-[1rem] text-[1.5rem] text-[var(--color-text-main)]">
                    <li className="flex items-start gap-[1rem]">
                      <span className="text-[var(--color-secondary)] font-bold">•</span>
                      <span><strong>Club Regió7:</strong> 2x1 per als socis (venda exclusiva a taquilles)</span>
                    </li>
                    <li className="flex items-start gap-[1rem]">
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
                className="mb-[4rem]"
              />

              <div className="grid gap-[3rem]">
                {/* Online Card */}
                <div className="border border-[var(--color-secondary)] p-[4rem] text-center bg-[var(--color-secondary)]/5">
                  <h3 className="text-[2.4rem] font-serif font-medium text-[var(--color-primary)] mb-[1rem]">
                    Venda Online
                  </h3>
                  <p className="text-[1.6rem] text-[var(--color-text-muted)] mb-[3rem]">
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
                <div className="grid grid-cols-1 gap-[2rem]">
                  <div className="border border-[var(--color-border)] p-[2.4rem]">
                    <h4 className="text-[1.6rem] font-bold text-[var(--color-primary)] mb-[0.5rem]">Sant Fruitós de Bages</h4>
                    <p className="text-[1.5rem] font-bold text-[var(--color-text-main)]">Joanan33@ (Antic Foto Isidre)</p>
                    <p className="text-[1.4rem] text-[var(--color-text-muted)] mt-[0.5rem]">Ctra. de Vic, 44</p>
                    <p className="text-[1.2rem] text-[var(--color-text-light)] mt-[1rem] uppercase tracking-wide">Botiga</p>
                  </div>
                  <div className="border border-[var(--color-border)] p-[2.4rem]">
                    <h4 className="text-[1.6rem] font-bold text-[var(--color-primary)] mb-[0.5rem]">Manresa</h4>
                    <p className="text-[1.5rem] font-bold text-[var(--color-text-main)]">Taquilles Teatre Kursaal</p>
                    <p className="text-[1.4rem] text-[var(--color-text-muted)] mt-[0.5rem]">Passeig de Pere III, 35</p>
                    <p className="text-[1.2rem] text-[var(--color-text-light)] mt-[1rem] uppercase tracking-wide">Taquilles</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* FAQ Section */}
      <section className="py-[8rem]">
        <Container>
          <div className="max-w-[80rem] mx-auto">
            <h2 className="text-[3.2rem] font-serif font-medium text-[var(--color-primary)] mb-[4rem] text-center">
              Dubtes freqüents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[4rem]">
               <div>
                 <h4 className="text-[1.8rem] font-medium text-[var(--color-primary)] mb-[1rem]">Venda el dia del concert</h4>
                 <p className="text-[1.5rem] text-[var(--color-text-muted)] leading-relaxed">
                   Si queden entrades disponibles, es podran adquirir a l'entrada de Món Sant Benet a partir de les 21:15h.
                 </p>
               </div>
               <div>
                 <h4 className="text-[1.8rem] font-medium text-[var(--color-primary)] mb-[1rem]">Política de devolucions</h4>
                 <p className="text-[1.5rem] text-[var(--color-text-muted)] leading-relaxed">
                   No s&apos;admeten canvis ni devolucions, excepte en cas de cancel·lació total de l&apos;esdeveniment.
                 </p>
               </div>
               <div>
                 <h4 className="text-[1.8rem] font-medium text-[var(--color-primary)] mb-[1rem]">Pla de pluja</h4>
                 <p className="text-[1.5rem] text-[var(--color-text-muted)] leading-relaxed">
                   En cas de pluja, el concert es trasllada a l&apos;interior (La Fàbrica), mantenint la validesa de les entrades.
                 </p>
               </div>
               <div>
                 <h4 className="text-[1.8rem] font-medium text-[var(--color-primary)] mb-[1rem]">Obertura de portes</h4>
                 <p className="text-[1.5rem] text-[var(--color-text-muted)] leading-relaxed">
                   L&apos;accés al recinte s&apos;obre 1 hora abans de l&apos;inici del concert (21:15h). Hi ha servei de bar.
                 </p>
               </div>
               <div>
                 <h4 className="text-[1.8rem] font-medium text-[var(--color-primary)] mb-[1rem]">Accessibilitat</h4>
                 <p className="text-[1.5rem] text-[var(--color-text-muted)] leading-relaxed">
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
