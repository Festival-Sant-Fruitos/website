'use client';

import Container from '@/components/shared/Container';
import { BlurFade } from '@/components/ui/blur-fade';

export default function QuoteSection() {
  return (
    <section className="py-20 md:py-[140px] border-y border-[var(--color-border)]">
      <Container>
        <BlurFade inView inViewMargin="-80px">
          <figure className="max-w-[820px] mx-auto text-center">
            <blockquote className="text-3xl md:text-[3rem] lg:text-[3.5rem] font-serif font-light italic text-[var(--color-primary)] leading-[1.2]">
              &laquo;Considereu la Cultura sempre com un dels elements primordials per tenir una societat millor&raquo;
            </blockquote>
            <figcaption className="mt-8 text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)]">
              Riccardo Muti, director d&rsquo;orquestra
            </figcaption>
          </figure>
        </BlurFade>
      </Container>
    </section>
  );
}
