import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Accordion from '@/components/shared/Accordion';
import MapEmbed from '@/components/shared/MapEmbed';
import venueData from '@/data/venue.json';

export const metadata: Metadata = {
  title: 'Ubicació',
  description: 'Com arribar a Món Sant Benet, Sant Fruitós de Bages. Transport, aparcament i pla de pluja pel Festival de Música Clàssica.',
  alternates: { canonical: '/ubicacio/' },
  openGraph: { url: '/ubicacio/' },
};

export default function UbicacioPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-5">
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
          src="/images/concerts/gallery/venue-panoramic.jpg"
          alt="Vista panoràmica del recinte del festival a Món Sant Benet"
          fill
          sizes="100vw"
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
              <MapEmbed
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.8!2d1.8995!3d41.7420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a45a639536d525%3A0x4642997184464380!2sM%C3%B3n%20Sant%20Benet!5e0!3m2!1sen!2ses!4v1716380000000!5m2!1sen!2ses"
                title="Mapa de Món Sant Benet"
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
                  <h4 className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-text-light)] mb-2.5">
                    Aparcament
                  </h4>
                  <p className="text-[15px] text-[var(--color-text-main)]">
                    {venueData.transport.parking}
                  </p>
                </div>

                <div id="pluja" className="bg-[var(--color-surface)] p-6 scroll-mt-[100px]">
                   <h4 className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-text-light)] mb-2.5">
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

      {/* Experiències per als assistents */}
      <section className="py-20 md:py-[120px] bg-[var(--color-surface)]">
        <Container>
          <div className="max-w-[900px] mx-auto">
            <SectionHeading
              title="Experiències per als assistents"
              subtitle="Món Sant Benet ofereix avantatges especials per a qui ve al festival"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Sopars i Allotjament */}
              <div className="bg-white border border-[var(--color-border)] p-8 lg:p-10 flex flex-col">
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-3">
                  Sopars i allotjament
                </p>
                <h3 className="text-2xl font-serif font-light text-[var(--color-primary)] leading-tight mb-5">
                  Restaurant Món i Hotel Món
                </h3>
                <p className="text-[15px] text-[var(--color-text-main)] leading-relaxed mb-4">
                  Servei de sopars al Restaurant Món, ubicat dins l&apos;Hotel Món, de 20 a 22h.
                  Recomanem l&apos;allotjament a l&apos;Hotel Món ****S: en reservar directament
                  i mencionant que assistiu al concert, us beneficiareu d&apos;un descompte
                  en la tarifa i altres cortesies.
                </p>
                <p className="text-xs text-[var(--color-text-muted)] italic mb-6">
                  Promoció vàlida únicament per a reserves fetes directament per telèfon o e-mail.
                </p>

                <div className="mt-auto pt-5 border-t border-[var(--color-border)] space-y-1.5 text-sm">
                  <p>
                    <span className="font-semibold text-[var(--color-primary)]">Telèfon:</span>{' '}
                    <a href="tel:+34938759404" className="text-[var(--color-text-main)] hover:text-[var(--color-secondary)] transition-colors">
                      938 759 404
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-primary)]">E-mail:</span>{' '}
                    <a href="mailto:hotel@monsantbenet.com" className="text-[var(--color-text-main)] hover:text-[var(--color-secondary)] transition-colors">
                      hotel@monsantbenet.com
                    </a>
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] pt-2">
                    Servei de bar-cafeteria a la Plaça de l&apos;Absis, de 20 a 22h.
                  </p>
                </div>
              </div>

              {/* Visita Especial Monestir */}
              <div className="bg-white border border-[var(--color-border)] p-8 lg:p-10 flex flex-col">
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-3">
                  Visita especial
                </p>
                <h3 className="text-2xl font-serif font-light text-[var(--color-primary)] leading-tight mb-5">
                  Les dues cares del monestir
                </h3>
                <p className="text-[15px] text-[var(--color-text-main)] leading-relaxed mb-4">
                  Descobreix el monestir a través de dues experiències immersives
                  amb projeccions de gran format: l&apos;època medieval a l&apos;església,
                  el celler i el claustre, i l&apos;època modernista, quan el monestir
                  es va reconvertir en residència d&apos;estiu del pintor Ramon Casas.
                </p>
                <p className="text-[15px] text-[var(--color-text-main)] leading-relaxed mb-6">
                  Si sou assistents als concerts, amb el codi{' '}
                  <span className="font-semibold text-[var(--color-primary)]">FESTIVALSF</span>{' '}
                  tindreu un preu especial.
                </p>

                <div className="mt-auto pt-5 border-t border-[var(--color-border)]">
                  <a
                    href="https://monsantbenet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    Horaris i compra d&apos;entrades a monsantbenet.com
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H9M17 7V15" />
                    </svg>
                  </a>
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
          <div className="max-w-[720px] mx-auto">
            <SectionHeading title="Com arribar" />
            <Accordion
              items={[
                {
                  title: "Com arribar en cotxe",
                  content: <Accordion items={venueData.transport.car} className="pl-5 border-t-0" />
                }
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
