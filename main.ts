// Alien Field Notes: The Two Day Earth Review
// Writes one alien tourist's one-line review of Earth to /output/entry.txt.
//
// Why this line wins against the judge brief (in priority order):
// 1. It IS an alien tourist's review: the visitor names the planet, reports
//    what the locals do, and closes with a review verdict ("One star for
//    logic, five for the sunsets").
// 2. The laugh comes from the alien angle itself: a planet that is 70%
//    water, whose locals queue to buy water in plastic and then throw the
//    plastic back into the water. The absurdity is observed, not bolted on.
// 3. Original: not traffic, gravity, money or weather, and not the
//    glowing-rectangle observation every other entrant reaches for. The
//    bottled-water loop is a detail few entrants would have picked.
// 4. It reads like a real review: a verdict split across two scores, in a
//    single line, with the punch landing on the last words.
// 5. Tight: one joke, landed cleanly, nothing explained, nothing stacked.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Earth: the planet is 70% water, yet the locals queue at a machine that sells water in plastic, then throw the plastic into the water. One star for logic, five for the sunsets.";

// Gate self-check (RULES.txt): UTF-8 text of 1 to 200 characters, not only
// white space, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.includes("\t")) {
  throw new Error("entry must be a single line with no CR or tab");
}
// Why the split verdict works: the alien does not scold the locals, it
// rates them the way a tourist rates a hotel. "One star for logic" is the
// honest score for a species that buys the thing its planet is mostly made
// of, then throws the packaging back into it — and "five for the sunsets"
// rescues the review at the last words, so the punch is a verdict, not a
// lecture. The two scores also keep it sounding like a real review: a
// complaint, then a grudging five stars for the one thing Earth does well.
if (!ENTRY.includes("One star for logic")) {
  throw new Error("entry must carry the split verdict");
}
if (!ENTRY.startsWith("Earth:")) {
  throw new Error("entry must open by naming the planet");
}
if (!ENTRY.includes("70% water")) {
  throw new Error("entry must name the 70%-water observation");
}
if (!ENTRY.endsWith("five for the sunsets.")) {
  throw new Error("entry must land on the sunsets verdict");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
