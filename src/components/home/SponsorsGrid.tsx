import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import sponsorsData from '@/data/sponsors.json';

export default function SponsorsGrid() {
  return (
    <section id="patrocinadors" className="py-[8rem] md:py-[12rem]">
      <Container>
        <SectionHeading
          title="Amb el suport de"
          subtitle="Institucions i entitats que fan possible el festival"
        />

        <div className="space-y-[8rem]">
          {sponsorsData.tiers.map((tier) => (
            <div key={tier.name}>
              <div className="flex flex-col items-center text-center">
                <p className="text-[1.2rem] font-bold tracking-[0.2em] uppercase text-[var(--color-text-light)] mb-[3.2rem] relative inline-block after:content-[''] after:block after:w-[4rem] after:h-[1px] after:bg-[var(--color-border)] after:mx-auto after:mt-[0.8rem]">
                  {tier.name}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-[4rem] md:gap-[6rem]">
                  {tier.sponsors.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={sponsor.name}
                      className="group"
                    >
                      {/* Placeholder - replace with real logos */}
                      <div className="h-[6rem] md:h-[8rem] px-[2.4rem] bg-[var(--color-surface)] flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105">
                        <span className="text-[1.4rem] text-[var(--color-text-muted)] font-medium whitespace-nowrap font-serif italic">
                          {sponsor.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
