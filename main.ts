import { mkdirSync, writeFileSync } from "node:fs";

// Alien Field Notes: one alien tourist's one-line review of Earth.
// The locals' New Year's Eve ritual, seen from outside: a whole planet
// queues to watch a ball drop, then claims boredom the rest of the year.
const LINE =
  "Four stars. The locals queue for hours to watch a ball drop once a year, then spend the other 364 days complaining there is nothing to do. Would visit again.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line length ${LINE.length} outside 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars`);
