'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import { BlurFade } from '@/components/ui/blur-fade';
import concertData from '@/data/concerts.json';

export default function ProgramPreview() {
  const { concerts } = concertData;

  return (
    <section className="py-20 md:py-[140px]">
      <Container>
        <BlurFade inView inViewMargin="-80px">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <SectionHeading
              title="Programa 2025"
              subtitle="Quatre vetllades d'excepció als jardins de Mon Sant Benet"
              className="mb-0"
            />
            <Button href="/programa" variant="outline" size="sm">
              Veure tot el calendari
            </Button>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {concerts.map((concert, i) => (
            <BlurFade key={concert.id} delay={0.1 * i} inView inViewMargin="-60px">
              <Link
                href={`/programa#${concert.id}`}
                className="group block h-full"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-5">
                  <Image
                    src={concert.image}
                    alt={concert.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div>
                  <p className="text-xs text-[var(--color-text-light)] font-medium uppercase tracking-[0.15em] mb-2">
                    {concert.dayOfWeek} {concert.day} {concert.month} &middot; {concert.time}h
                  </p>
                  <h3 className="text-xl md:text-[22px] font-serif font-medium text-[var(--color-primary)] leading-[1.15] mb-2.5 group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                    {concert.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
                    {concert.artists.map(a => a.name).join(', ')}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
