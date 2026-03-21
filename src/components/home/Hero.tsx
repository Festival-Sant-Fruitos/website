'use client';

import Image from 'next/image';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { BlurFade } from '../ui/blur-fade';

interface HeroProps {
  edition: string;
  year: number;
}

export default function Hero({ edition, year }: HeroProps) {
  return (
    <section className="relative h-[calc(100dvh-80px)] min-h-[600px] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/mon-sant-benet.jpg"
          alt="Monestir de Sant Benet de Bages"
          fill
          className="object-cover"
          priority
        />
        {/* Base darken + radial vignette centered on text area */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.35)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <BlurFade delay={0.1} inView={false}>
          <p className="text-[13px] font-medium tracking-[0.3em] uppercase text-white/70 mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
            {edition} Edició
          </p>
        </BlurFade>

        <BlurFade delay={0.25} inView={false}>
          <h1 className="text-[2.75rem] md:text-[4.5rem] lg:text-[5.5rem] font-serif !font-light !text-white leading-[0.95] tracking-tight mb-6 max-w-[900px] drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Festival Internacional
            <br />
            de Música Clàssica
          </h1>
        </BlurFade>

        <BlurFade delay={0.4} inView={false}>
          <p className="text-[15px] md:text-lg text-white/70 font-light mb-3 tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
            Memorial Eduard Casajoana
          </p>
          <p className="text-sm text-white/60 mb-10 flex items-center justify-center gap-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Mon Sant Benet &middot; Juliol {year}
          </p>
        </BlurFade>

        <BlurFade delay={0.55} inView={false}>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/programa" variant="white" size="lg">
              Veure Programa
            </Button>
            <Button
              href="/entrades"
              variant="outline"
              size="lg"
              className="!text-white !border-white/30 hover:!bg-white/10"
            >
              Comprar Entrades
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
