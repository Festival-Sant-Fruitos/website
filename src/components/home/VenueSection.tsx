'use client';

import Image from 'next/image';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { BlurFade } from '@/components/ui/blur-fade';

export default function VenueSection() {
  return (
    <section className="py-20 md:py-[140px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <BlurFade inView inViewMargin="-80px" direction="left">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group">
              <Image
                src="/images/venue/venue-arch-view.jpg"
                alt="Vista del recinte des de l'arc del monestir"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </BlurFade>

          <BlurFade inView inViewMargin="-80px" delay={0.15}>
            <div>
              <div className="w-10 h-px bg-[var(--color-secondary)] mb-6" />
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-4">
                L&apos;escenari
              </p>
              <h2 className="text-[2rem] md:text-[3.5rem] font-serif font-light text-[var(--color-primary)] leading-[1.05] mb-6">
                Mon Sant Benet
              </h2>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-[1.7] font-light mb-5">
                El monestir de Sant Benet de Bages, fundat l&apos;any 960, és un dels conjunts
                monumentals més impressionants de Catalunya. Restaurat per la Fundació Catalunya
                La Pedrera, ofereix un marc incomparable per gaudir de la música clàssica sota les estrelles.
              </p>
              <p className="text-base text-[var(--color-text-muted)] leading-[1.7] mb-8">
                Els concerts es celebren al claustre del monestir, un espai amb una acústica
                excepcional que crea una connexió única entre la música, la història i la natura.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/ubicacio" variant="dark">
                  Com arribar-hi
                </Button>
                <Button href="/ubicacio#pluja" variant="outline">
                  Pla de pluja
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
