import Image from 'next/image';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

export default function VenueSection() {
  return (
    <>
      <hr className="border-[var(--color-border)]" />
      <section className="py-[8rem] md:py-[12rem] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-[8rem] items-center">
            {/* Image side - no border radius, sharp rectangle */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group">
              <Image
                src="/images/hero/mon-sant-benet.jpg"
                alt="Mon Sant Benet"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Text side */}
            <div>
                <p className="text-[1.3rem] font-bold tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-[1.6rem]">
                  L&apos;escenari
                </p>
                <h2 className="text-[3.2rem] md:text-[5.6rem] font-serif font-medium text-[var(--color-primary)] leading-[1.05] mb-[2.4rem]">
                  Mon Sant Benet
                </h2>
                <p className="text-[1.6rem] md:text-[1.8rem] text-[var(--color-text-muted)] leading-relaxed font-light mb-[2rem]">
                  El monestir de Sant Benet de Bages, fundat l&apos;any 960, és un dels conjunts
                  monumentals més impressionants de Catalunya. Restaurat per la Fundació Catalunya
                  La Pedrera, ofereix un marc incomparable per gaudir de la música clàssica sota les estrelles.
                </p>
                <p className="text-[1.6rem] text-[var(--color-text-muted)] leading-relaxed mb-[3.2rem]">
                  Els concerts es celebren al claustre del monestir, un espai amb una acústica
                  excepcional que crea una connexió única entre la música, la història i la natura.
                </p>
                <div className="flex flex-wrap gap-[1.6rem]">
                  <Button href="/ubicacio" variant="dark">
                    Com arribar-hi
                  </Button>
                  <Button href="/ubicacio#pluja" variant="outline">
                    Pla de pluja
                  </Button>
                </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
