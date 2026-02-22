import Image from 'next/image';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

export default function SponsorsGrid() {
  return (
    <section id="patrocinadors" className="py-[8rem] md:py-[12rem]">
      <Container>
        <SectionHeading
          title="Amb el suport de"
          subtitle="Institucions i entitats que fan possible el festival"
        />

        <div className="flex justify-center">
          <div className="relative w-full max-w-[40rem]">
            <Image
              src="/images/sponsors/sponsors-all.png"
              alt="Patrocinadors i col·laboradors del festival"
              width={400}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
