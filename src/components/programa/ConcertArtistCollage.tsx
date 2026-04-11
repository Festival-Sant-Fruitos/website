import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ArtistImage {
  src: string;
  alt: string;
  className?: string;
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
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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

  // 2 images — constrained to same total height as single-image cards
  if (count === 2) {
    return (
      <div className="flex flex-col aspect-[4/5] overflow-hidden">
        <CollageCell src={images[0].src} alt={images[0].alt} className="flex-[3] min-h-0 [&_img]:object-[center_10%]" />
        <CollageCell src={images[1].src} alt={images[1].alt} className="flex-[2] min-h-0 [&_img]:object-center" />
      </div>
    );
  }

  // 3+ images — wide group on top, two individual portraits below
  return (
    <div className="flex flex-col aspect-[4/5] overflow-hidden">
      <CollageCell
        src={images[0].src}
        alt={images[0].alt}
        className={cn('flex-[2] min-h-0', images[0].className)}
      />
      <div className="grid grid-cols-2 flex-[3] min-h-0">
        <CollageCell src={images[1].src} alt={images[1].alt} className={cn('h-full', images[1].className)} />
        <CollageCell src={images[2].src} alt={images[2].alt} className={cn('h-full', images[2].className)} />
      </div>
    </div>
  );
}
