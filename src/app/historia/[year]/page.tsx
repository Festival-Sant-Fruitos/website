import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import archiveData from '@/data/archive.json';

interface Props {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return archiveData.editions
    .filter((e) => e.concertDetails && e.concertDetails.length > 0)
    .map((e) => ({ year: String(e.year) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params;
  const edition = archiveData.editions.find((e) => e.year === Number(year));
  if (!edition) return {};
  return {
    title: `${edition.edition} Edició (${edition.year})`,
    description: `Programa del ${edition.edition} Festival Internacional de Música Clàssica, any ${edition.year}.`,
  };
}

export default async function ArchiveYearPage({ params }: Props) {
  const { year } = await params;
  const edition = archiveData.editions.find((e) => e.year === Number(year));
  if (!edition || !edition.concertDetails) notFound();

  return (
    <>
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-5">
            {edition.edition} Edició
          </p>
          <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
            Festival {edition.year}
          </h1>
          <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
            {edition.highlights}
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[720px] mx-auto space-y-12">
            {edition.concertDetails.map((concert, i) => (
              <div key={i} className="border-b border-[var(--color-border)] pb-10">
                <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-2">
                  Concert {i + 1}
                </p>
                <h2 className="text-2xl md:text-[2rem] font-serif font-light text-[var(--color-primary)] leading-[1.1] mb-3">
                  {concert.title}
                </h2>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{concert.date}</p>
                <div className="space-y-1">
                  {concert.artists.map((a, j) => (
                    <p key={j} className="text-base text-[var(--color-text-main)]">
                      <strong>{a.name}</strong>
                      {a.role && <span className="text-[var(--color-text-muted)]"> — {a.role}</span>}
                    </p>
                  ))}
                </div>
                {'repertoire' in concert && concert.repertoire && concert.repertoire.length > 0 && (
                  <div className="mt-5">
                    <h4 className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-text-light)] mb-3">
                      Programa
                    </h4>
                    <ul className="space-y-1.5">
                      {concert.repertoire.map((item, k) => (
                        <li key={k} className="text-sm text-[var(--color-text-main)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/historia" variant="outline">
              &larr; Totes les edicions
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
