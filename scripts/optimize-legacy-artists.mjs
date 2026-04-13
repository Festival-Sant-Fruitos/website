import sharp from 'sharp';
import { readdir, rename, stat } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = 'public/images/legacy-artists';
const MAX_WIDTH = 1200;
const QUALITY = 82;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const src = join(DIR, file);
  const tmp = join(DIR, `.tmp-${file}`);
  const before = (await stat(src)).size;

  await sharp(src)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp);

  await rename(tmp, src);
  const after = (await stat(src)).size;
  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB (-${pct}%)`);
}
