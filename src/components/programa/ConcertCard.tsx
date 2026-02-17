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
  price,
  index,
}: ConcertCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <section id={id} className="scroll-mt-[8rem]">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-[8rem] items-start`}>
          {/* Image Side */}
          <div className={isReversed ? 'lg:order-2' : ''}>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${135 + index * 30}deg, #1A1A1A 0%, #2C2C2C 50%, #1A1A1A 100%)`,
                }}
              />
              {/* Date overlay */}
              <div className="absolute top-[2rem] left-[2rem]">
                <div className="bg-teal px-[1.6rem] py-[1rem]">
                  <p className="text-[2.4rem] font-bold text-white leading-none">{day}</p>
                  <p className="text-[1.1rem] uppercase tracking-wider text-white/80">{month}</p>
                </div>
              </div>
              <div className="absolute bottom-[2rem] left-[2rem]">
                <p className="text-[1.4rem] text-white/60">
                  {dayOfWeek} &middot; {time}h
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={isReversed ? 'lg:order-1' : ''}>
            <p className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-teal mb-[0.8rem]">
              Concert {index + 1}
            </p>
            <h3 className="text-[2.8rem] md:text-[3.7rem] font-bold text-gray-800 leading-[1.1]">
              {title}
            </h3>
            <p className="text-[1.9rem] text-gray-600 mt-[0.8rem]">{subtitle}</p>

            <hr className="my-[2.4rem]" />

            <p className="text-[1.6rem] text-gray-600 leading-[1.6]">
              {description}
            </p>

            {/* Repertoire */}
            <div className="mt-[2.4rem]">
              <h4 className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-gray-400 mb-[1.2rem]">
                Programa
              </h4>
              <ul className="space-y-[0.8rem]">
                {repertoire.map((item, i) => (
                  <li key={i} className="text-[1.4rem] text-gray-600 pl-[1.6rem] relative before:content-['—'] before:absolute before:left-0 before:text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Artists */}
            <div className="mt-[2.4rem] border border-gray-200 p-[2rem]">
              <h4 className="text-[1.2rem] font-bold tracking-[0.15em] uppercase text-gray-400 mb-[0.8rem]">
                Intèrprets
              </h4>
              {artists.map((artist) => (
                <ArtistBio key={artist.name} {...artist} />
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-[2rem] mt-[3.2rem]">
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal text-white text-[1.6rem] font-bold px-[2.4rem] py-[1.2rem] hover:bg-gray-800 transition-colors duration-300"
              >
                Comprar Entrades
              </a>
              <span className="text-[1.6rem] text-gray-400">{price}</span>
            </div>
          </div>
      </div>
    </section>
  );
}
