'use client';

import Image from 'next/image';
import Container from '@/components/shared/Container';
import { BlurFade } from '@/components/ui/blur-fade';

export default function SponsorsGrid() {
  return (
    <section id="patrocinadors" className="py-20 md:py-[120px] bg-[var(--color-surface)]">
      <Container>
        <BlurFade inView inViewMargin="-80px">
          <div className="max-w-[500px] mx-auto">
            <h2 className="text-2xl md:text-[2.25rem] font-serif font-light text-[var(--color-primary)] text-center mb-10">
              Amb el suport de
            </h2>
            <Image
              src="/images/sponsors/sponsors-2026.png"
              alt="Patrocinadors i col·laboradors del Festival Internacional de Música Clàssica 2026"
              width={600}
              height={1800}
              className="w-full h-auto"
            />
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
