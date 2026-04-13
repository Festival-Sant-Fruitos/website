import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/shared/Container';
import { getCurrentEdition } from '@/lib/festival';

const edition = getCurrentEdition();

export const metadata: Metadata = {
  title: 'Patrocinadors',
  description: `Institucions, empreses i col·laboradors que fan possible el Festival Internacional de Música Clàssica ${edition.year}.`,
};

export default function PatrocinadorsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-5">
            Amb el suport de
          </p>
          <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
            Patrocinadors
          </h1>
          <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
            El Festival és possible gràcies a les institucions, empreses i col·laboradors
            que any rere any confien en el projecte.
          </p>
        </Container>
      </section>

      {/* Thanks + Sponsors Image */}
      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[720px] mx-auto">
            <p className="text-lg text-[var(--color-text-muted)] leading-[1.7] mb-14 md:mb-20">
              Gràcies a tots els qui fan possible el Festival, any rere any.
            </p>

            <Image
              src="/images/sponsors/sponsors-2026.png"
              alt={`Patrocinadors i col·laboradors del Festival Internacional de Música Clàssica ${edition.year}`}
              width={562}
              height={1260}
              className="w-full h-auto"
              priority
            />
          </div>
        </Container>
      </section>
    </>
  );
}
