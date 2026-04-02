import type { Metadata } from 'next';
import Image from 'next/image';
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
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-5">
            L&apos;escenari
          </p>
          <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
            {venueData.name}
          </h1>
          <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
            Un monestir mil·lenari envoltat de natura, història i silenci.
            El marc perfecte per a la música.
          </p>
        </Container>
      </section>

      {/* Venue photo */}
      <section className="relative aspect-[21/9] overflow-hidden">
        <Image
          src="/images/venue/venue-panoramic.jpg"
          alt="Vista panoràmica del recinte del festival a Mon Sant Benet"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Map & Description */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px]">
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
                className="mb-10"
              />

              <div className="prose prose-lg text-[var(--color-text-main)] mb-10">
                <p className="text-base leading-relaxed">
                  {venueData.description}
                </p>
              </div>

              <div className="grid gap-5">
                <div className="bg-[var(--color-surface)] p-6">
                  <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)] mb-2.5">
                    Aparcament
                  </h4>
                  <p className="text-[15px] text-[var(--color-text-main)]">
                    {venueData.transport.parking}
                  </p>
                </div>

                <div id="pluja" className="bg-[var(--color-surface)] p-6 scroll-mt-[100px]">
                   <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-text-light)] mb-2.5">
                    Pla de Pluja
                  </h4>
                  <p className="text-[15px] text-[var(--color-text-main)]">
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
      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[2rem] md:text-[2.5rem] font-serif font-medium text-[var(--color-primary)] mb-10 text-center">
              Com arribar
            </h2>
            <Accordion
              items={[
                {
                  title: "Com arribar en cotxe",
                  content: <Accordion items={venueData.transport.car} className="pl-5 border-t-0" />
                },
                {
                  title: "Transport Públic",
                  content: <Accordion items={venueData.transport.publicTransport} className="pl-5 border-t-0" />
                }
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
