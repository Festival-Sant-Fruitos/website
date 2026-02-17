import type { Metadata } from 'next';
import Container from '@/components/shared/Container';
import ConcertCard from '@/components/programa/ConcertCard';
import Button from '@/components/shared/Button';
import concertData from '@/data/concerts.json';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Programa 2025',
  description: `Programa del ${concertData.edition} Festival Internacional de Música Clàssica. ${concertData.concerts.length} concerts al juliol de 2025 a Mon Sant Benet.`,
};

export default function ProgramaPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[10rem] pb-[6rem] bg-[var(--color-primary)]">
        <Container>
          <p className="text-[1.4rem] font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-[2rem]">
            {concertData.edition} Edició &middot; Juliol {concertData.year}
          </p>
          <h1 className="text-[5.6rem] md:text-[8rem] font-serif font-medium text-white leading-[0.95] mb-[3rem]">
            Programa Oficial
          </h1>
          <p className="text-[2rem] text-white/70 max-w-[70rem] leading-[1.4] font-light">
            Quatre vetllades de música clàssica d&apos;excepció als jardins de Mon Sant Benet.
            Cada dijous del juliol a les 22:15h.
          </p>
        </Container>
      </section>

      {/* Concerts List */}
      <section className="py-[8rem] md:py-[12rem]">
        <Container>
          <div className="space-y-[10rem]">
            {concertData.concerts.map((concert, i) => (
              <article key={concert.id} id={concert.id} className="scroll-mt-[10rem]">
                {/* Date Header */}
                <div className="flex items-center gap-[2rem] mb-[4rem]">
                  <span className="text-[4rem] md:text-[6rem] font-serif font-medium text-[var(--color-secondary)] leading-none">
                    {concert.day}
                  </span>
                  <div className="flex flex-col border-l border-[var(--color-border)] pl-[2rem]">
                    <span className="text-[1.6rem] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                      {concert.month}
                    </span>
                    <span className="text-[1.4rem] text-[var(--color-text-muted)] uppercase tracking-wider">
                      {concert.dayOfWeek} &middot; {concert.time}h
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[4rem] lg:gap-[6rem]">
                  {/* Left: Image & Key Info */}
                  <div className="lg:col-span-5 space-y-[3rem]">
                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 group">
                       <div
                        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{
                          background: `linear-gradient(${160 + i * 20}deg, #1A1A1A 0%, #2C2C2C ${40 + i * 10}%, #1A1A1A 100%)`,
                        }}
                      />
                      {/* Image placeholder wrapper */}
                      <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                        <span className="text-white/20 font-serif text-3xl italic">
                          {concert.artists[0]?.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--color-surface)] p-[3rem]">
                       <h4 className="text-[1.4rem] font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-[2rem]">
                         Intèrprets
                       </h4>
                       <ul className="space-y-[1.2rem]">
                         {concert.artists.map((artist) => (
                           <li key={artist.name}>
                             <span className="block text-[1.8rem] font-serif font-medium text-[var(--color-primary)]">
                               {artist.name}
                             </span>
                             {artist.role && (
                               <span className="block text-[1.4rem] text-[var(--color-text-muted)] italic">
                                 {artist.role}
                               </span>
                             )}
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>

                  {/* Right: Content & Repertoire */}
                  <div className="lg:col-span-7 flex flex-col">
                    <h2 className="text-[3.6rem] md:text-[4.8rem] font-serif font-medium text-[var(--color-primary)] leading-[1.05] mb-[1.2rem]">
                      {concert.title}
                    </h2>
                    <p className="text-[2rem] text-[var(--color-text-muted)] font-light leading-relaxed mb-[3rem]">
                      {concert.subtitle}
                    </p>
                    
                    <div className="prose prose-lg text-[var(--color-text-main)] mb-[4rem]">
                      <p className="text-[1.6rem] leading-relaxed">
                        {concert.description}
                      </p>
                    </div>

                    {/* Repertoire List */}
                    {concert.repertoire && (
                      <div className="mb-[4rem]">
                         <h4 className="text-[1.4rem] font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-[2rem] flex items-center gap-4">
                           Programa
                           <span className="h-px bg-[var(--color-border)] flex-1"></span>
                         </h4>
                         <ul className="grid grid-cols-1 gap-[1.2rem]">
                           {concert.repertoire.map((item, idx) => (
                             <li key={idx} className="flex gap-[1.6rem] text-[1.5rem] text-[var(--color-text-main)]">
                               <span className="text-[var(--color-secondary)] font-bold">
                                 {String(idx + 1).padStart(2, '0')}
                               </span>
                               <span>{item}</span>
                             </li>
                           ))}
                         </ul>
                      </div>
                    )}

                    <div className="mt-auto pt-[4rem] border-t border-[var(--color-border)] flex flex-wrap items-center gap-[2rem] justify-between">
                       <div className="flex flex-col">
                         <span className="text-[1.4rem] text-[var(--color-text-muted)] uppercase tracking-wider">Preu entrada</span>
                         <span className="text-[2.4rem] font-serif font-medium text-[var(--color-primary)]">
                           {concert.price}
                         </span>
                       </div>
                       <Button href={concert.ticketUrl} variant="primary" external>
                         Comprar Entrades
                       </Button>
                    </div>
                  </div>
                </div>
                
                {i < concertData.concerts.length - 1 && <hr className="mt-[10rem] border-[var(--color-border)]" />}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Rain Plan Notice */}
      <section className="border-t border-[var(--color-border)] py-[4rem] bg-[var(--color-surface)]">
        <Container>
          <div className="flex items-start gap-[2rem] max-w-[70rem] mx-auto text-center md:text-left md:items-center">
            <div className="hidden md:flex w-[5rem] h-[5rem] bg-white border border-[var(--color-border)] rounded-full items-center justify-center flex-shrink-0 text-[var(--color-secondary)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25" />
                <line x1="8" y1="16" x2="8.01" y2="21" />
                <line x1="12" y1="13" x2="12.01" y2="18" />
                <line x1="16" y1="16" x2="16.01" y2="21" />
              </svg>
            </div>
            <div>
              <p className="text-[1.6rem] font-bold text-[var(--color-primary)] mb-[0.4rem]">Garantia de concert</p>
              <p className="text-[1.4rem] text-[var(--color-text-muted)]">
                En cas de pluja, els concerts es traslladaran a <strong>{concertData.rainVenue}</strong>,
                garantint la mateixa qualitat acústica i aforament.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
