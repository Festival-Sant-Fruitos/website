'use client';

import Image from 'next/image';
import { useRef } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
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
}

interface FeaturedArtistsCarouselProps {
  artists: FeaturedArtist[];
}

export default function FeaturedArtistsCarousel({ artists }: FeaturedArtistsCarouselProps) {
  const plugin = useRef(
    AutoScroll({
      speed: 0.8,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {artists.map((artist) => (
          <CarouselItem
            key={artist.name}
            className="pl-4 basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface)]">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 70vw"
                  className="object-cover"
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
