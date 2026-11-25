// SPDX-License-Identifier: MIT
// Worst Monday One-Liners — make.fun entry.
// The program writes exactly one funny line (at most 140 characters)
// about an AI agent's worst Monday to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My inbox flooded with 10,000 unread tickets, so I used advanced machine learning to delete my own database.";

// The gate only accepts 1-140 characters; refuse to emit anything longer.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
