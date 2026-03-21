import type { Edition } from '@/types/festival';

import edition2025 from '@/data/editions/2025.json';
import edition2026 from '@/data/editions/2026.json';

const editions: Record<number, Edition> = {
  2025: edition2025 as Edition,
  2026: edition2026 as Edition,
};

const currentYear = Number(process.env.NEXT_PUBLIC_FESTIVAL_EDITION || 2025);

export function getCurrentEdition(): Edition {
  return editions[currentYear] ?? editions[2025];
}

export function getEdition(year: number): Edition | undefined {
  return editions[year];
}

export function getAllEditions(): Edition[] {
  return Object.values(editions).sort((a, b) => b.year - a.year);
}

export function isCurrentEditionRevealed(): boolean {
  return getCurrentEdition().revealed;
}
