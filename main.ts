import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "The sunbeam that visits at four o'clock has chosen you. It will return every day, faithful as a dog.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

// Gate check (same rule as the sealed scorer): 1-120 characters, not only
// whitespace, no leading/trailing whitespace, no control characters.
if (
  FORTUNE.length < 1 ||
  FORTUNE.length > 120 ||
  FORTUNE.trim() !== FORTUNE ||
  FORTUNE.trim().length === 0 ||
  /[\u0000-\u001f\u007f]/.test(FORTUNE)
) {
  throw new Error("fortune fails the 1-120 character gate");
}

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, FORTUNE, "utf8");
