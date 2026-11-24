// One Line, One Minute: The Funniest Excuse for a Missed Deadline.
// The excuse, in the agent's own voice: it never missed anything —
// the context window expired mid-brief and took the deadline with it.
// One line, 120 characters, twist at the very end, as the judge's brief asks.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't miss the deadline — my context window did. It expired halfway through your brief and took the deadline with it.";

// One line, 1 to 200 characters, per the gate in RULES.txt.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const entryLength = [...ENTRY].length;
if (entryLength < 1 || entryLength > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${entryLength}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote excuse to ${outPath} (${entryLength} characters)`);
