'use client';

import Image from 'next/image';
import { useRef } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface FeaturedArtist {
  name: string;
  image: string;
  objectPosition?: string;
}

interface FeaturedArtistsCarouselProps {
  artists: FeaturedArtist[];
  variant?: 'portrait' | 'landscape';
  direction?: 'forward' | 'backward';
}

export default function FeaturedArtistsCarousel({
  artists,
  variant = 'portrait',
  direction = 'forward',
}: FeaturedArtistsCarouselProps) {
  const plugin = useRef(
    AutoScroll({
      speed: 0.8,
      direction,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const isLandscape = variant === 'landscape';

  const basisClasses = isLandscape
    ? 'basis-[85%] sm:basis-[72%] md:basis-[52%] lg:basis-[38%] xl:basis-[32%]'
    : 'basis-[60%] sm:basis-[42%] md:basis-[30%] lg:basis-[22%] xl:basis-[18%]';

  const aspectClass = isLandscape ? 'aspect-[4/3]' : 'aspect-[3/4]';

  const sizes = isLandscape
    ? '(min-width: 1280px) 32vw, (min-width: 1024px) 38vw, (min-width: 768px) 52vw, (min-width: 640px) 72vw, 85vw'
    : '(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 768px) 30vw, (min-width: 640px) 42vw, 60vw';

  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-4 items-stretch">
        {artists.map((artist) => (
          <CarouselItem key={artist.name} className={cn('pl-4', basisClasses)}>
            <figure className="h-full flex flex-col">
              <div
                className={cn(
                  'relative overflow-hidden bg-[var(--color-surface)]',
                  aspectClass
                )}
              >
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes={sizes}
                  className="object-cover"
                  style={{ objectPosition: artist.objectPosition ?? 'center' }}
                />
              </div>
              <figcaption className="mt-4 text-center">
                <span className="block font-serif text-base md:text-lg text-[var(--color-primary)] leading-tight">
                  {artist.name}
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 md:-left-4" />
      <CarouselNext className="right-2 md:-right-4" />
    </Carousel>
  );
}
