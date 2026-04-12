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
            <h2 className="text-2xl md:text-[3rem] font-serif font-light italic text-[var(--color-primary)] leading-[1.3]">
              &laquo;La música clàssica ha de ser per a tothom&raquo;
            </h2>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
