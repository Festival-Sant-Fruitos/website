'use client';

import Container from '@/components/shared/Container';
import { BlurFade } from '@/components/ui/blur-fade';
import { NumberTicker } from '@/components/ui/number-ticker';

const stats = [
  { value: 31, label: 'Edicions', suffix: '' },
  { value: 120, label: 'Concerts', suffix: '+' },
  { value: 30, label: 'Anys', suffix: '+' },
  { value: 200, label: 'Artistes', suffix: '+' },
];

export default function LegacyBanner() {
  return (
    <section className="py-20 md:py-[140px] bg-[var(--color-primary)]">
      <Container>
        <BlurFade inView inViewMargin="-80px">
          <div className="mb-14 md:mb-20">
            <h2 className="text-[1.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-serif font-light text-white leading-[1.05] max-w-[800px]">
              Més de tres dècades
              <br />
              de música clàssica
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={0.1 * i} inView inViewMargin="-60px">
              <div>
                <p className="text-[2.5rem] md:text-[4.5rem] font-sans font-light text-[var(--color-secondary)] leading-none tabular-nums">
                  <NumberTicker
                    value={stat.value}
                    className="!text-[var(--color-secondary)] !font-sans !font-light"
                  />
                  {stat.suffix && (
                    <span className="text-[var(--color-secondary)]">{stat.suffix}</span>
                  )}
                </p>
                <p className="text-[13px] text-white/40 mt-4 uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
