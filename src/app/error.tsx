'use client';

import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <>
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-5">
            Error
          </p>
          <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
            Alguna cosa ha fallat
          </h1>
          <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
            Hi ha hagut un error inesperat. Torna-ho a provar o visita una altra pàgina.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[600px]">
            <div className="flex flex-wrap gap-3">
              <Button onClick={reset} variant="dark">
                Torna-ho a provar
              </Button>
              <Button href="/" variant="outline">
                Inici
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
