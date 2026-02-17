import Hero from '@/components/home/Hero';
import ProgramPreview from '@/components/home/ProgramPreview';
import VenueSection from '@/components/home/VenueSection';
import LegacyBanner from '@/components/home/LegacyBanner';
import SponsorsGrid from '@/components/home/SponsorsGrid';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramPreview />
      <VenueSection />
      <LegacyBanner />
      <SponsorsGrid />
      <Newsletter />
    </>
  );
}
