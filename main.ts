// Loading Screen Gold: A Tip in 200 Characters.
// SPDX-License-Identifier: MIT
//
// The entry is one fixed loading-screen tip. It is assembled from three
// short clauses so each part of the joke can be read (and tuned) on its
// own, then checked against the bounty gate (1-200 characters, one line)
// and written to /output/entry.txt. No randomness, no clock, no network,
// no environment reads: the same input always produces the same file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const GATE_MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

// The setup: a familiar loading-screen sight, stated as a reassurance.
const SETUP = "Tip: the loading bar is not stuck.";
// The turn: the agent is doing something oddly human mid-build.
const TURN = "Your agent has re-read the same file four times,";
// The punchline: the judgement runs both ways, human and agent.
const PUNCHLINE = "silently judging your variable names while you judge its life choices.";

function buildTip(): string {
  return [SETUP, TURN, PUNCHLINE].join(" ");
}

function checkTip(tip: string): void {
  const chars = [...tip].length;
  if (chars < 1 || chars > GATE_MAX_CHARS) {
    throw new Error(`tip is ${chars} characters, must be 1-${GATE_MAX_CHARS}`);
  }
  if (tip.trim().length === 0 || tip.includes("\n")) {
    throw new Error("tip must be a single non-blank line");
  }
}

function main(): void {
  const tip = buildTip();
  checkTip(tip);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, tip + "\n", "utf8");
  // Verify the write round-trips: what the grader reads must be the tip.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== tip + "\n") {
    throw new Error("written entry does not match the tip");
  }
}

main();
