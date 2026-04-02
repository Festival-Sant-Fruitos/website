export interface Artist {
  name: string;
  role: string;
  bio: string;
}

export interface Concert {
  id: string;
  date: string;
  dayOfWeek: string;
  day: number;
  month: string;
  time: string;
  title: string;
  subtitle: string;
  artists: Artist[];
  repertoire: string[];
  description: string;
  ticketUrl: string;
  image: string;
  /** Optional CSS class for the hero image (e.g. object-position override) */
  imageClassName?: string;
  /** Array of artist/group photos for the collage grid on the programa page */
  artistImages?: { src: string; alt: string; className?: string }[];
  price: string;
  /** "complete" = all info present, "partial" = some fields are placeholders */
  status?: "complete" | "partial";
}

export interface Edition {
  edition: string;
  /** Numeric edition number (e.g. 31 for XXXI) — used for stats display */
  editionNumber: number;
  year: number;
  tagline: string;
  memorial: string;
  venue: string;
  rainVenue: string;
  /** false = show "Pròximament" teaser instead of concert list */
  revealed: boolean;
  concerts: Concert[];
}

export interface ArchiveEdition {
  year: number;
  edition: string;
  highlights: string;
  concerts: number;
  pdf: string | null;
  /** Optional cover image for featured editions */
  image?: string;
  /** Optional full concert data for rich archive pages */
  concertDetails?: ArchiveConcert[];
}

export interface ArchiveConcert {
  date: string;
  title: string;
  artists: { name: string; role: string }[];
  repertoire?: string[];
}

export interface ArchiveData {
  editions: ArchiveEdition[];
  milestones: { year: number; text: string }[];
}
