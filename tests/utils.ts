import fs from 'node:fs';
import path from 'node:path';

function readEnvEdition(): number | null {
  try {
    const envPath = path.resolve(__dirname, '../.env.local');
    const content = fs.readFileSync(envPath, 'utf8');
    const m = content.match(/NEXT_PUBLIC_FESTIVAL_EDITION\s*=\s*(\d+)/);
    return m ? Number(m[1]) : null;
  } catch {
    return null;
  }
}

const currentYear =
  Number(process.env.NEXT_PUBLIC_FESTIVAL_EDITION) || readEnvEdition() || 2026;

const editionPath = path.resolve(__dirname, `../src/data/editions/${currentYear}.json`);
export const currentEdition = JSON.parse(fs.readFileSync(editionPath, 'utf8'));
export const isRevealed: boolean = Boolean(currentEdition.revealed);
