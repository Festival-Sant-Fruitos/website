import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Accordion from '@/components/shared/Accordion';
import venueData from '@/data/venue.json';

export const metadata: Metadata = {
  title: 'Ubicació',
  description: 'Com arribar a Mon Sant Benet, Sant Fruitós de Bages. Transport, aparcament i pla de pluja pel Festival de Música Clàssica.',
};

export default function UbicacioPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[10rem] pb-[6rem] bg-[var(--color-primary)]">
        <Container>
          <p className="text-[1.4rem] font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-[2rem]">
            L&apos;escenari
          </p>
          <h1 className="text-[5.6rem] md:text-[8rem] font-serif font-medium text-white leading-[0.95] mb-[3rem]">
            {venueData.name}
          </h1>
          <p className="text-[2rem] text-white/70 max-w-[70rem] leading-[1.4] font-light">
            Un monestir mil·lenari envoltat de natura, història i silenci.
            El marc perfecte per a la música.
          </p>
        </Container>
      </section>

      {/* Map & Description */}
      <section className="py-[8rem] md:py-[12rem]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6rem] lg:gap-[10rem]">
            {/* Map - Larger and cleaner */}
            <div className="aspect-square lg:aspect-[4/5] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.8!2d1.8995!3d41.7420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a45a639536d525%3A0x4642997184464380!2sM%C3%B3n%20Sant%20Benet!5e0!3m2!1sen!2ses!4v1716380000000!5m2!1sen!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Mon Sant Benet"
                className="w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <SectionHeading 
                title="El Monestir" 
                subtitle={venueData.fullAddress}
                className="mb-[4rem]"
              />
              
              <div className="prose prose-lg text-[var(--color-text-main)] mb-[4rem]">
                <p className="text-[1.6rem] leading-relaxed">
                  {venueData.description}
                </p>
              </div>

              <div className="grid gap-[2rem]">
                <div className="bg-[var(--color-surface)] p-[2.4rem]">
                  <h4 className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)] mb-[1rem]">
                    Aparcament
                  </h4>
                  <p className="text-[1.5rem] text-[var(--color-text-main)]">
                    {venueData.transport.parking}
                  </p>
                </div>
                
                <div className="bg-[var(--color-surface)] p-[2.4rem]">
                   <h4 className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)] mb-[1rem]">
                    Pla de Pluja
                  </h4>
                  <p className="text-[1.5rem] text-[var(--color-text-main)]">
                    {venueData.rainPlan}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-[var(--color-border)]" />

      {/* Transport Grid */}
      <section className="py-[8rem] md:py-[12rem]">
        <Container>
          <div className="max-w-[80rem] mx-auto">
            <h2 className="text-[3.2rem] md:text-[4rem] font-serif font-medium text-[var(--color-primary)] mb-[4rem] text-center">
              Com arribar
            </h2>
            <Accordion 
              items={[
                {
                  title: "Com arribar en cotxe",
                  content: <Accordion items={venueData.transport.car} className="pl-[2rem] border-t-0" />
                },
                {
                  title: "Transport Públic",
                  content: <Accordion items={venueData.transport.publicTransport} className="pl-[2rem] border-t-0" />
                }
              ]} 
            />
          </div>
        </Container>
      </section>
    </>
  );
}
