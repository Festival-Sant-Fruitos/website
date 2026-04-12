import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

interface ComingSoonProps {
  /** Small uppercase kicker above the title (e.g. "XXXII Edició · Juliol 2026") */
  eyebrow: string;
  /** Main heading. Defaults to "Pròximament". */
  title?: string;
  /** Body paragraph below the title */
  description: string;
  /** CTA button label. Defaults to Instagram follow. */
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ComingSoon({
  eyebrow,
  title = 'Pròximament',
  description,
  ctaLabel = 'Segueix-nos a Instagram',
  ctaHref = 'https://www.instagram.com/festivalsantfruitos',
}: ComingSoonProps) {
  return (
    <section className="py-20 md:py-[140px]">
      <Container>
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-6">
            {eyebrow}
          </p>
          <h2 className="text-[2.5rem] md:text-[4rem] font-serif font-medium text-[var(--color-primary)] leading-[1.05] mb-6">
            {title}
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10">
            {description}
          </p>
          <Button href={ctaHref} variant="outline" external>
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
