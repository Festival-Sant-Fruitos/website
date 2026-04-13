'use client';

import Image from 'next/image';
import Link from 'next/link';
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
            <div className="mt-10 text-center">
              <Link
                href="/patrocinadors"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
              >
                Veure tots els patrocinadors
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
