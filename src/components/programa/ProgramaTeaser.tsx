import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import type { Edition } from '@/types/festival';

interface ProgramaTeaserProps {
  edition: Edition;
}

export default function ProgramaTeaser({ edition }: ProgramaTeaserProps) {
  return (
    <section className="py-20 md:py-[140px]">
      <Container>
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-6">
            {edition.edition} Edició &middot; Juliol {edition.year}
          </p>
          <h2 className="text-[2.5rem] md:text-[4rem] font-serif font-medium text-[var(--color-primary)] leading-[1.05] mb-6">
            Pròximament
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10">
            La programació del {edition.edition} Festival Internacional de Música Clàssica
            s&apos;anunciarà properament.
          </p>
          <Button href="https://www.instagram.com/festivalsantfruitos" variant="outline" external>
            Segueix-nos a Instagram
          </Button>
        </div>
      </Container>
    </section>
  );
}
