import Link from 'next/link';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import concertData from '@/data/concerts.json';

export default function ProgramPreview() {
  const { concerts } = concertData;

  return (
    <section className="py-[8rem] md:py-[12rem] bg-[var(--color-surface)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[4rem] gap-4">
          <SectionHeading
            title="Programa 2025"
            subtitle="Quatre vetllades d'excepció als jardins de Mon Sant Benet"
            className="mb-0"
          />
          <Button href="/programa" variant="outline" size="sm">
            Veure tot el calendari
          </Button>
        </div>

        {/* 4-column grid for concerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.4rem]">
          {concerts.map((concert, i) => (
            <div key={concert.id}>
              <Link href={`/programa#${concert.id}`} className="group block h-full flex flex-col bg-white border border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-colors duration-300">
                {/* Image container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      background: `linear-gradient(${160 + i * 20}deg, #1A1A1A 0%, #2C2C2C ${40 + i * 10}%, #1A1A1A 100%)`,
                    }}
                  />
                  {/* Date badge */}
                  <div className="absolute top-0 left-0 bg-[var(--color-secondary)] text-white px-[1.2rem] py-[0.6rem] text-[1.2rem] font-bold uppercase tracking-wider">
                    {concert.day} {concert.month}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-[2rem] flex flex-col flex-grow">
                  <div className="mb-auto">
                    <p className="text-[1.2rem] text-[var(--color-text-muted)] font-medium uppercase tracking-widest mb-[0.8rem]">
                      {concert.dayOfWeek} &middot; {concert.time}h
                    </p>
                    <h3 className="text-[2rem] font-serif font-medium text-[var(--color-primary)] leading-[1.1] mb-[1.2rem] group-hover:text-[var(--color-secondary)] transition-colors">
                      {concert.title}
                    </h3>
                    <p className="text-[1.4rem] text-[var(--color-text-muted)] line-clamp-2">
                      {concert.artists.map(a => a.name).join(', ')}
                    </p>
                  </div>
                  
                  <div className="mt-[2.4rem] pt-[1.6rem] border-t border-[var(--color-gray-100)] flex items-center justify-between">
                    <span className="text-[1.4rem] font-bold text-[var(--color-primary)]">
                      Més informació
                    </span>
                    <span className="text-[1.2rem] font-bold text-[var(--color-secondary)] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      Entrades &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
