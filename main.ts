// The 4AM Commit: Funniest Agent Bug-Fix Message
// make.fun competition u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
//
// The entry is a single commit message: an AI agent at 4AM, reverting its own
// chain of fixes in dead-serious commit-log voice. The joke is the loop of
// self-repair — every fix in the chain was fixing the previous fix — reported
// with bureaucratic calm, root cause filed away as paperwork.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole entry: one line, the commit message itself.
const ENTRY =
  "fix: reverted my 2am fix, which fixed my midnight fix, which broke the lunchtime fix; root cause: me, filed under wontfix";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
// The grader runs the program in a sandbox where /output is the target;
// locally, OUTPUT_DIR may point at a test folder instead.
const MAX_CHARS = 200;

const outputDir = process.env.OUTPUT_DIR ?? "/output";

const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `entry is ${charCount} characters, outside the 1-${MAX_CHARS} gate`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${charCount} characters)`);
