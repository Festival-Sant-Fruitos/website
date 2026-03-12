import Hero from '@/components/home/Hero';
import ProgramPreview from '@/components/home/ProgramPreview';
import MemorialSection from '@/components/home/MemorialSection';
import VenueSection from '@/components/home/VenueSection';
import LegacyBanner from '@/components/home/LegacyBanner';
import SponsorsGrid from '@/components/home/SponsorsGrid';
import Newsletter from '@/components/home/Newsletter';
import JsonLd from '@/components/shared/JsonLd';
import concertData from '@/data/concerts.json';

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicFestival',
  name: `${concertData.edition} Festival Internacional de Música Clàssica`,
  alternateName: 'Memorial Eduard Casajoana',
  url: 'https://festivalmusicaclassica.cat',
  startDate: concertData.concerts[0]?.date,
  endDate: concertData.concerts[concertData.concerts.length - 1]?.date,
  location: {
    '@type': 'Place',
    name: 'Mon Sant Benet',
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
  subEvent: concertData.concerts.map((c) => ({
    '@type': 'MusicEvent',
    name: c.title,
    startDate: `${c.date}T${c.time}:00`,
    description: c.subtitle,
    location: { '@type': 'Place', name: 'Mon Sant Benet' },
    performer: c.artists.map((a) => ({ '@type': 'Person', name: a.name })),
    offers: {
      '@type': 'Offer',
      url: c.ticketUrl,
      availability: 'https://schema.org/InStock',
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={eventJsonLd} />
      <Hero />
      <ProgramPreview />
      <MemorialSection />
      <VenueSection />
      <LegacyBanner />
      <SponsorsGrid />
      <Newsletter />
    </>
  );
}
