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

  // 3+ images — wide group on top (full image, no crop), two individual portraits below
  return (
    <div className="flex flex-col gap-1">
      <div className={cn('overflow-hidden bg-gray-100 group', images[0].className)}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={1600}
          height={900}
          className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="grid grid-cols-2 gap-1">
        <CollageCell src={images[1].src} alt={images[1].alt} className={cn('aspect-[3/4]', images[1].className)} />
        <CollageCell src={images[2].src} alt={images[2].alt} className={cn('aspect-[3/4]', images[2].className)} />
      </div>
    </div>
  );
}
