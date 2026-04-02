import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

export default function NotFound() {
  return (
    <>
      <section className="pt-[100px] pb-[60px] bg-[var(--color-primary)]">
        <Container>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-5">
            Error 404
          </p>
          <h1 className="text-[3.5rem] md:text-[5rem] font-serif font-medium text-white leading-[0.95] mb-[30px]">
            Pàgina no trobada
          </h1>
          <p className="text-xl text-white/70 max-w-[700px] leading-[1.4] font-light">
            La pàgina que busques no existeix o ha estat moguda.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-[120px]">
        <Container>
          <div className="max-w-[600px]">
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10">
              Potser t&apos;interessa visitar alguna d&apos;aquestes pàgines:
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/" variant="dark">
                Inici
              </Button>
              <Button href="/programa" variant="outline">
                Programa
              </Button>
              <Button href="/entrades" variant="outline">
                Entrades
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
