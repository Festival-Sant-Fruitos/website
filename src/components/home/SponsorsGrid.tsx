'use client';

import Container from '@/components/shared/Container';
import { BlurFade } from '@/components/ui/blur-fade';
import sponsorData from '@/data/sponsors.json';

export default function SponsorsGrid() {
  return (
    <section id="patrocinadors" className="py-20 md:py-[120px] bg-[var(--color-surface)]">
      <Container>
        <BlurFade inView inViewMargin="-80px">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-text-light)] mb-3">
              Amb el suport de
            </p>
            <h2 className="text-2xl md:text-[2.25rem] font-serif font-light text-[var(--color-primary)]">
              Institucions i entitats col·laboradores
            </h2>
          </div>
        </BlurFade>

        <BlurFade inView inViewMargin="-60px" delay={0.15}>
          <div className="max-w-[800px] mx-auto space-y-10">
            {sponsorData.tiers.map((tier) => (
              <div key={tier.name} className="text-center">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-text-light)] mb-4">
                  {tier.name}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
                  {tier.sponsors.map((sponsor, i) => (
                    <span key={sponsor.name} className="flex items-center gap-x-6">
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] md:text-base text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors font-light"
                      >
                        {sponsor.name}
                      </a>
                      {i < tier.sponsors.length - 1 && (
                        <span className="text-[var(--color-border)]">&middot;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
