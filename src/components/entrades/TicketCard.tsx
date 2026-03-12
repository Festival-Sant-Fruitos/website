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
    <div className="border border-gray-200 p-6 flex flex-col h-full hover:border-teal transition-colors duration-300">
        {/* Date + Title */}
        <div className="flex items-start gap-5 mb-4">
          <div className="bg-teal text-white w-[60px] h-[60px] flex flex-col items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold leading-none">{day}</span>
            <span className="text-[10px] uppercase tracking-wider">{month}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-400 mt-[2px]">
              {dayOfWeek} &middot; {time}h
            </p>
          </div>
        </div>

        {/* Artists */}
        <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
          {artists.map((artist) => (
            <span
              key={artist}
              className="text-xs border border-gray-200 text-gray-600 px-2 py-[3px]"
            >
              {artist}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-gray-800">{price}</span>
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal text-white text-sm font-bold px-[18px] py-2 hover:bg-gray-800 transition-colors duration-300"
          >
            Comprar
          </a>
        </div>
    </div>
  );
}
