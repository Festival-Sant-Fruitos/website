import Hero from '@/components/home/Hero';
import ProgramPreview from '@/components/home/ProgramPreview';
import MemorialSection from '@/components/home/MemorialSection';
import VenueSection from '@/components/home/VenueSection';
import LegacyBanner from '@/components/home/LegacyBanner';
import SponsorsGrid from '@/components/home/SponsorsGrid';
import JsonLd from '@/components/shared/JsonLd';
import { getCurrentEdition } from '@/lib/festival';

const edition = getCurrentEdition();

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicFestival',
  name: `${edition.edition} Festival Internacional de Música Clàssica`,
  alternateName: 'Memorial Eduard Casajoana',
  url: 'https://festivalmusicaclassica.cat',
  startDate: edition.concerts[0]?.date,
  endDate: edition.concerts[edition.concerts.length - 1]?.date,
  location: {
    '@type': 'Place',
    name: 'Món Sant Benet',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Camí de Sant Benet, s/n',
      addressLocality: 'Sant Fruitós de Bages',
      postalCode: '08272',
      addressCountry: 'ES',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Associació Música Clàssica Memorial Eduard Casajoana',
  },
  ...(edition.revealed
    ? {
        subEvent: edition.concerts.map((c) => ({
          '@type': 'MusicEvent',
          name: c.title,
          startDate: `${c.date}T${c.time}:00`,
          description: c.subtitle,
          location: { '@type': 'Place', name: 'Món Sant Benet' },
          performer: c.artists.map((a) => ({ '@type': 'Person', name: a.name })),
          offers: {
            '@type': 'Offer',
            url: c.ticketUrl,
            availability: 'https://schema.org/InStock',
          },
        })),
      }
    : {}),
};

export default function Home() {
  return (
    <>
      <JsonLd data={eventJsonLd} />
      <Hero edition={edition.edition} year={edition.year} />
      <ProgramPreview concerts={edition.concerts} year={edition.year} revealed={edition.revealed} />
      <MemorialSection />
      <VenueSection />
      <LegacyBanner editionNumber={edition.editionNumber} />
      <SponsorsGrid />
    </>
  );
}
