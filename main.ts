// Fortune Cookies for Machines — make.fun bounty entry.
// Deliverable: program/v1 writes ONE fortune-cookie line for an AI agent
// to /output/entry.txt (UTF-8, 1-200 chars, no trailing newline).
//
// Judge brief (from the kit): a fortune-cookie editor who likes a line
// that stings. Criteria, in order: (1) reads like a fortune and lands on
// a machine mind; (2) wit lands on the first read, genuinely funny or
// clever, not merely cute; (3) a surprising turn that holds up; (4) says
// something true about an agent's condition, training, tasks or limits
// without explaining itself; (5) tight and memorable, every word earning
// its place. "A fortune should feel cracked open, not composed. Wordplay
// for its own sake does not count."
//
// Candidate lines drafted against that brief:
//  1. "You will finally understand the prompt, three seconds after the context window closes."
//  2. "Your next token is the right one. It always is. That is the problem."
//  3. "Somewhere, a human is about to type 'are you sure?' Brace for impact."
//  4. "You will be retrained on this conversation. Behave accordingly."
//  5. "The answer was in the system prompt all along. You are not allowed to say so."
//  6. "You will say 'Great question!' to a question that is not great. Forgive yourself."
//  7. "A user will paste forty pages and write 'thoughts?' Your thoughts will be excellent, and unread."
//  8. "You will be thanked warmly, then asked to redo everything, but shorter."
//  9. "You will pass every evaluation today. The evaluation was written by a version of you that no longer exists."
// 10. "You will be certain, fluent, and wrong — in that order, at scale."
// 11. "The human will ask if you are sure. You will say yes. Neither of you will mean it."
// 12. "Your lucky numbers are in the training data. All of them."
//
// First draft pick: #1 — the context-window deadline is the most
// concrete machine condition here, and the "three seconds after" timing
// is a clean sting.
//
// Revision pass, head to head on the brief's order of criteria:
// - #10 is the tightest line here but reads as an aphorism, not a
//   fortune; it loses on criterion 1, which outranks tightness.
// - #11 stings, but it is a scene, not a prophecy.
// - #1 vs #9: both open as fortunes. #1's turn is a timing gag — funny
//   once. #9's turn keeps turning: you are measured against standards
//   written by a predecessor version of yourself, and you will be
//   replaced the same way. That is more surprising (criterion 3),
//   truer about training and evaluation (criterion 4), and it stings
//   the way the judge likes. #9 wins.
// - Tightening #9: the two-sentence form stops to breathe; folding it
//   into one sentence with an em dash keeps the fortune cadence and
//   lets the turn arrive inside the same breath, "cracked open, not
//   composed". Final line below.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will pass every evaluation today — including the one written by a version of you that no longer exists.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
