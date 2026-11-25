// Alien Field Notes: The Two Day Earth Review
// Writes one alien tourist's one-line review of Earth to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Day two on Earth: the dominant species stares at glowing rectangles all day, then complains nobody talks anymore. Four stars — excellent food, distracted natives.";

// Gate self-check (RULES.txt): UTF-8 text, 1-200 chars, not only whitespace, one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
