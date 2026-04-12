import type { MetadataRoute } from 'next';
import archiveData from '@/data/archive.json';

export const dynamic = 'force-static';

const BASE_URL = 'https://festivalsantfruitos.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/programa/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/entrades/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/sobre/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/ubicacio/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/historia/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis-legal/`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const historyRoutes: MetadataRoute.Sitemap = archiveData.editions
    .filter((e) => e.concertDetails && e.concertDetails.length > 0)
    .map((e) => ({
      url: `${BASE_URL}/historia/${e.year}/`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    }));

  return [...staticRoutes, ...historyRoutes];
}
