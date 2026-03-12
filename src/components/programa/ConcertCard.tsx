import Image from 'next/image';
import ArtistBio from './ArtistBio';

interface Artist {
  name: string;
  role: string;
  bio: string;
}

interface ConcertCardProps {
  id: string;
  date: string;
  dayOfWeek: string;
  day: number;
  month: string;
  time: string;
  title: string;
  subtitle: string;
  artists: Artist[];
  repertoire: string[];
  description: string;
  ticketUrl: string;
  image: string;
  price: string;
  index: number;
}

export default function ConcertCard({
  id,
  dayOfWeek,
  day,
  month,
  time,
  title,
  subtitle,
  artists,
  repertoire,
  description,
  ticketUrl,
  image,
  price,
  index,
}: ConcertCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <section id={id} className="scroll-mt-20">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start`}>
          {/* Image Side */}
          <div className={isReversed ? 'lg:order-2' : ''}>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              {/* Date overlay */}
              <div className="absolute top-5 left-5">
                <div className="bg-teal px-4 py-2.5">
                  <p className="text-2xl font-bold text-white leading-none">{day}</p>
                  <p className="text-[11px] uppercase tracking-wider text-white/80">{month}</p>
                </div>
              </div>
              <div className="absolute bottom-5 left-5">
                <p className="text-sm text-white/60">
                  {dayOfWeek} &middot; {time}h
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={isReversed ? 'lg:order-1' : ''}>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-teal mb-2">
              Concert {index + 1}
            </p>
            <h3 className="text-[28px] md:text-[37px] font-bold text-gray-800 leading-[1.1]">
              {title}
            </h3>
            <p className="text-[19px] text-gray-600 mt-2">{subtitle}</p>

            <hr className="my-6" />

            <p className="text-base text-gray-600 leading-[1.6]">
              {description}
            </p>

            {/* Repertoire */}
            <div className="mt-6">
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-3">
                Programa
              </h4>
              <ul className="space-y-2">
                {repertoire.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Artists */}
            <div className="mt-6 border border-gray-200 p-5">
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">
                Intèrprets
              </h4>
              {artists.map((artist) => (
                <ArtistBio key={artist.name} {...artist} />
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-5 mt-8">
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal text-white text-base font-bold px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
              >
                Comprar Entrades
              </a>
              <span className="text-base text-gray-400">{price}</span>
            </div>
          </div>
      </div>
    </section>
  );
}
