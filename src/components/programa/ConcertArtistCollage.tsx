import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ArtistImage {
  src: string;
  alt: string;
}

interface ConcertArtistCollageProps {
  images: ArtistImage[];
  fallbackImage: string;
  fallbackAlt: string;
}

function CollageCell({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-gray-100 group', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export default function ConcertArtistCollage({
  images,
  fallbackImage,
  fallbackAlt,
}: ConcertArtistCollageProps) {
  const count = images.length;

  // 0 images — use fallback, same as current single-image behavior
  if (count === 0) {
    return (
      <CollageCell
        src={fallbackImage}
        alt={fallbackAlt}
        className="aspect-[4/5]"
      />
    );
  }

  // 1 image — full-bleed single image
  if (count === 1) {
    return (
      <CollageCell
        src={images[0].src}
        alt={images[0].alt}
        className="aspect-[4/5]"
      />
    );
  }

  // 2 images — each gets its own natural aspect ratio
  if (count === 2) {
    return (
      <div className="flex flex-col gap-1">
        <CollageCell src={images[0].src} alt={images[0].alt} className="aspect-[4/4] [&_img]:object-top" />
        <CollageCell src={images[1].src} alt={images[1].alt} className="aspect-[3/2]" />
      </div>
    );
  }

  // 3+ images — lead image portrait, two landscape below
  return (
    <div className="flex flex-col gap-1">
      <CollageCell src={images[0].src} alt={images[0].alt} className="aspect-[4/5]" />
      <div className="grid grid-cols-2 gap-1">
        <CollageCell src={images[1].src} alt={images[1].alt} className="aspect-[3/2]" />
        <CollageCell src={images[2].src} alt={images[2].alt} className="aspect-[3/2]" />
      </div>
    </div>
  );
}
