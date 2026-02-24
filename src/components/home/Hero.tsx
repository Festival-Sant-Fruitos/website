'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Container from '../shared/Container';
import Button from '../shared/Button';

const heroImages = [
  { src: '/images/archive/organitzacio.jpg', alt: 'Concert nocturn al festival' },
  { src: '/images/hero/mon-sant-benet.jpg', alt: 'Monestir de Sant Benet de Bages' },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[calc(100dvh-8rem)] min-h-[60rem] bg-black overflow-hidden group">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle gradient for text readability - Bottom up */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-16">
        <Container size="lg" className="w-full">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            {/* Main Headline - Bold & Clean like La Pedrera */}
            <h1 
              className="text-6xl md:text-8xl lg:text-[7rem] font-sans font-bold !text-white leading-[0.9] tracking-tight mb-8 drop-shadow-lg"
            >
              Festival Internacional <br/>
              <span className="!text-white/90">de Música Clàssica</span>
            </h1>

            {/* Subtitle & Details */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-10 text-lg md:text-xl font-medium !text-white/90 drop-shadow-md">
              <p className="tracking-wide text-white !mb-0 border-l-4 border-[var(--color-secondary)] pl-4">Memorial Eduard Casajoana</p>
              
              <div className="flex items-center gap-6 text-base md:text-lg text-white opacity-90">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Mon Sant Benet
                </span>
                <span className="flex items-center gap-2">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Juliol 2025
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="/entrades" variant="primary" size="lg" className="shadow-lg hover:scale-105 transition-transform">
                Comprar Entrades
              </Button>
              <Button href="/programa" variant="outline" size="lg" className="bg-white/10 backdrop-blur-md !text-white !border-white/30 hover:bg-white/20">
                Veure Programa
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
