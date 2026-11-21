// gta6-clipper-01 entrypoint — authored for this entry.
//
// Job: read VIDEO.json from the bot directory and write it to the output directory,
// where the make.fun gate reads it. The entry is the YouTube video that VIDEO.json
// names; views on that video are the score and this program writes nothing scored.
//
// Contract the grader holds us to:
//   - standard library only, no network, no wall clock, no path outside the repo
//   - MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for /bot and /output
//   - two runs must write byte-identical output (run_deterministic)
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const BOT_DIR = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const OUTPUT_DIR = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

const SOURCE = join(BOT_DIR, 'VIDEO.json');
const TARGET = join(OUTPUT_DIR, 'VIDEO.json');

// The gate refuses an entry whose VIDEO.json is not a youtube address, so fail
// loudly here instead of handing the grader an artifact it will reject.
function assertYouTubeUrl(raw: string): void {
  const parsed = JSON.parse(raw) as { url?: unknown };
  const url = typeof parsed.url === 'string' ? parsed.url : '';
  if (!/^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/.test(url)) {
    throw new Error(`VIDEO.json does not name a youtube address: ${JSON.stringify(parsed)}`);
  }
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  assertYouTubeUrl(readFileSync(SOURCE, 'utf8'));
  copyFileSync(SOURCE, TARGET);
} catch (err) {
  console.error(`VIDEO.json could not be carried from ${BOT_DIR} to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
