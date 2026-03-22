import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import ProgramaTeaser from '@/components/programa/ProgramaTeaser';
import { getCurrentEdition } from '@/lib/festival';

const edition = getCurrentEdition();

export const metadata: Metadata = {
  title: `Programa ${edition.year}`,
  description: `Programa del ${edition.edition} Festival Internacional de Música Clàssica. ${edition.concerts.length} concerts al juliol de ${edition.year} a Mon Sant Benet.`,
};

export default function ProgramaPage() {
  if (!edition.revealed) {
    return (
      <>
        {/* Hero Banner */}
        <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
          <Container>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-5">
              {edition.edition} Edició &middot; Juliol {edition.year}
            </p>
            <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
              Programa Oficial
            </h1>
            <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
              La programació del {edition.edition} Festival s&apos;anunciarà properament.
            </p>
          </Container>
        </section>
        <ProgramaTeaser edition={edition} />
      </>
    );
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-5">
            {edition.edition} Edició &middot; Juliol {edition.year}
          </p>
          <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
            Programa Oficial
          </h1>
          <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
            Quatre vetllades de música clàssica d&apos;excepció als jardins de Mon Sant Benet.
            Cada dijous del juliol a les 22:15h.
          </p>
        </Container>
      </section>

      {/* Concerts List */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="space-y-[100px]">
            {edition.concerts.map((concert, i) => (
              <article key={concert.id} id={concert.id} className="scroll-mt-[100px]">
                {/* Date Header */}
                <div className="flex items-center gap-5 mb-10">
                  <span className="text-[2.5rem] md:text-[3.75rem] font-serif font-medium text-[var(--color-secondary)] leading-none">
                    {concert.day}
                  </span>
                  <div className="flex flex-col border-l border-[var(--color-border)] pl-5">
                    <span className="text-base font-bold uppercase tracking-widest text-[var(--color-primary)]">
                      {concert.month}
                    </span>
                    <span className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">
                      {concert.dayOfWeek} &middot; {concert.time}h
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[60px]">
                  {/* Left: Image & Key Info */}
                  <div className="lg:col-span-5 space-y-[30px]">
                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 group">
                      <Image
                        src={concert.image}
                        alt={concert.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="bg-[var(--color-surface)] p-[30px]">
                       <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-5">
                         Intèrprets
                       </h4>
                       <ul className="space-y-3">
                         {concert.artists.map((artist) => (
                           <li key={artist.name}>
                             <span className="block text-lg font-serif font-medium text-[var(--color-primary)]">
                               {artist.name}
                             </span>
                             {artist.role && (
                               <span className="block text-sm text-[var(--color-text-muted)] italic">
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
                    <h2 className="text-[2.25rem] md:text-[3rem] font-serif font-medium text-[var(--color-primary)] leading-[1.05] mb-3">
                      {concert.title}
                    </h2>
                    <p className="text-xl text-[var(--color-text-muted)] font-light leading-relaxed mb-[30px]">
                      {concert.subtitle}
                    </p>

                    <div className="prose prose-lg text-[var(--color-text-main)] mb-10">
                      <p className="text-base leading-relaxed">
                        {concert.description}
                      </p>
                    </div>

                    {/* Repertoire List */}
                    {concert.repertoire && (
                      <div className="mb-10">
                         <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-5 flex items-center gap-4">
                           Programa
                           <span className="h-px bg-[var(--color-border)] flex-1"></span>
                         </h4>
                         <ul className="grid grid-cols-1 gap-3">
                           {concert.repertoire.map((item, idx) => (
                             <li key={idx} className="flex gap-4 text-[15px] text-[var(--color-text-main)]">
                               <span className="text-[var(--color-secondary)] font-bold">
                                 {String(idx + 1).padStart(2, '0')}
                               </span>
                               <span>{item}</span>
                             </li>
                           ))}
                         </ul>
                      </div>
                    )}

                    <div className="mt-auto pt-10 border-t border-[var(--color-border)] flex flex-wrap items-center gap-5 justify-between">
                       <div className="flex flex-col">
                         <span className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">Preu entrada</span>
                         <span className="text-2xl font-serif font-medium text-[var(--color-primary)]">
                           {concert.price}
                         </span>
                       </div>
                       <Button href={concert.ticketUrl} variant="primary" external>
                         Comprar Entrades
                       </Button>
                    </div>
                  </div>
                </div>

                {i < edition.concerts.length - 1 && <hr className="mt-[100px] border-[var(--color-border)]" />}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Rain Plan Notice */}
      <section className="border-t border-[var(--color-border)] py-10 bg-[var(--color-surface)]">
        <Container>
          <div className="flex items-start gap-5 max-w-[700px] mx-auto text-center md:text-left md:items-center">
            <div className="hidden md:flex w-[50px] h-[50px] bg-white border border-[var(--color-border)] rounded-full items-center justify-center flex-shrink-0 text-[var(--color-secondary)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25" />
                <line x1="8" y1="16" x2="8.01" y2="21" />
                <line x1="12" y1="13" x2="12.01" y2="18" />
                <line x1="16" y1="16" x2="16.01" y2="21" />
              </svg>
            </div>
            <div>
              <p className="text-base font-bold text-[var(--color-primary)] mb-1">Garantia de concert</p>
              <p className="text-sm text-[var(--color-text-muted)]">
                En cas de pluja, els concerts es traslladaran a un espai cobert dins del recinte
                de Mon Sant Benet. L&apos;espai exacte s&apos;anunciarà a les xarxes socials del festival.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
