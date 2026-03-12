'use client';

import Container from '@/components/shared/Container';
import { BlurFade } from '@/components/ui/blur-fade';

export default function MemorialSection() {
  return (
    <section className="py-20 md:py-[140px] border-y border-[var(--color-border)]">
      <Container>
        <BlurFade inView inViewMargin="-80px">
          <div className="max-w-[720px] mx-auto text-center">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-6">
              In Memoriam
            </p>
            <h2 className="text-2xl md:text-[3rem] font-serif font-light italic text-[var(--color-primary)] leading-[1.3] mb-6">
              &laquo;La música clàssica ha de ser per a tothom&raquo;
            </h2>
            <div className="w-10 h-px bg-[var(--color-secondary)] mx-auto mb-6" />
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed font-light">
              El festival porta el nom de Memorial Eduard Casajoana en honor a qui va ser
              un dels grans impulsors de la cultura musical a la comarca del Bages.
              El seu llegat perviu en cada edició, continuant la seva missió de fer
              accessible la música clàssica d&apos;excel·lència.
            </p>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
