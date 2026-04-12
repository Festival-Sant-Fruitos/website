import ComingSoon from '@/components/shared/ComingSoon';
import type { Edition } from '@/types/festival';

interface ProgramaTeaserProps {
  edition: Edition;
}

export default function ProgramaTeaser({ edition }: ProgramaTeaserProps) {
  return (
    <ComingSoon
      eyebrow={`${edition.edition} Edició · Juliol ${edition.year}`}
      description={`La programació del ${edition.edition} Festival Internacional de Música Clàssica s'anunciarà properament.`}
    />
  );
}
