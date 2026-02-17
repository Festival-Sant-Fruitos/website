'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '../shared/Container';
import Button from '../shared/Button';

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative h-[100dvh] min-h-[60rem] bg-black flex flex-col justify-end">
      {/* Background - dark with subtle image/video placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900" />
        {/* When real hero video/image is available: */}
        {/* <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src="/images/hero/mon-sant-benet.mp4" type="video/mp4" />
        </video> */}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - positioned at bottom-left like La Pedrera */}
      <div className="relative z-10 w-full pb-[8rem] md:pb-[10rem]">
        <Container size="lg">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Edition tag */}
            <p className="text-[1.4rem] text-white/80 font-medium tracking-[0.2em] uppercase mb-[2rem] border-l-2 border-[var(--color-secondary)] pl-[1.2rem]">
              XXXI Edició &middot; Juliol 2025
            </p>

            {/* Main headline - large serif like La Pedrera */}
            <h1 className="text-[5.6rem] md:text-[8rem] lg:text-[10rem] font-serif font-medium text-white leading-[0.95] tracking-tight max-w-[100rem]">
              Festival Internacional
              <br />
              de Música Clàssica
            </h1>

            {/* Subtitle */}
            <p className="text-[2rem] md:text-[2.4rem] text-white/70 mt-[2.4rem] max-w-[60rem] leading-relaxed font-light">
              Memorial Eduard Casajoana
            </p>

            {/* Info bar - like La Pedrera's practical info */}
            <div className="flex flex-wrap items-center gap-[3rem] mt-[4rem] text-[1.5rem] text-white/60 font-medium tracking-wide">
              <span className="flex items-center gap-[1rem]">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Mon Sant Benet
              </span>
              <span className="flex items-center gap-[1rem]">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                Juliol 2025
              </span>
            </div>

            {/* CTAs - square buttons like La Pedrera */}
            <div className="flex flex-wrap gap-[1.6rem] mt-[4rem]">
              <Button href="/programa" variant="primary" size="lg">
                Veure Programa
              </Button>
              <Button href="/entrades" variant="white" size="lg">
                Comprar Entrades
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
