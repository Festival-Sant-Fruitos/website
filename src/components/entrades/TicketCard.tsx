interface TicketCardProps {
  day: number;
  month: string;
  dayOfWeek: string;
  time: string;
  title: string;
  artists: string[];
  price: string;
  ticketUrl: string;
  index: number;
}

export default function TicketCard({
  day,
  month,
  dayOfWeek,
  time,
  title,
  artists,
  price,
  ticketUrl,
}: TicketCardProps) {
  return (
    <div className="border border-gray-200 p-[2.4rem] flex flex-col h-full hover:border-teal transition-colors duration-300">
        {/* Date + Title */}
        <div className="flex items-start gap-[2rem] mb-[1.6rem]">
          <div className="bg-teal text-white w-[6rem] h-[6rem] flex flex-col items-center justify-center flex-shrink-0">
            <span className="text-[2.4rem] font-bold leading-none">{day}</span>
            <span className="text-[1rem] uppercase tracking-wider">{month}</span>
          </div>
          <div>
            <h3 className="text-[1.8rem] font-bold text-gray-800">{title}</h3>
            <p className="text-[1.4rem] text-gray-400 mt-[0.2rem]">
              {dayOfWeek} &middot; {time}h
            </p>
          </div>
        </div>

        {/* Artists */}
        <div className="flex flex-wrap gap-[0.6rem] mb-[2rem] flex-1">
          {artists.map((artist) => (
            <span
              key={artist}
              className="text-[1.2rem] border border-gray-200 text-gray-600 px-[0.8rem] py-[0.3rem]"
            >
              {artist}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-[1.6rem] border-t border-gray-200">
          <span className="text-[2.4rem] font-bold text-gray-800">{price}</span>
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal text-white text-[1.4rem] font-bold px-[1.8rem] py-[0.8rem] hover:bg-gray-800 transition-colors duration-300"
          >
            Comprar
          </a>
        </div>
    </div>
  );
}
