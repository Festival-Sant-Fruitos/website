'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Container from '@/components/shared/Container';

const stats = [
  { value: 31, label: 'Edicions', suffix: '' },
  { value: 120, label: 'Concerts', suffix: '+' },
  { value: 30, label: 'Anys', suffix: '+' },
  { value: 200, label: 'Artistes', suffix: '+' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    if (reduced) { setCount(value); return; }
    let start = 0;
    const duration = 2000;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value, reduced]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function LegacyBanner() {
  return (
    <>
      <hr className="border-[var(--color-border-dark)]" />
      <section className="py-[8rem] md:py-[12rem] bg-[var(--color-primary)]">
        <Container>
          <div className="mb-[4rem] md:mb-[6rem]">
            <h2 className="text-[2.8rem] md:text-[5.6rem] lg:text-[7.2rem] font-serif font-medium text-white leading-[1.05] max-w-[80rem]">
              Més de tres dècades
              de música clàssica
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2.4rem] md:gap-[4rem]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[3.6rem] md:text-[6.4rem] font-medium text-[var(--color-secondary)] leading-none font-serif">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[1.4rem] text-white/50 mt-[1.2rem] uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
