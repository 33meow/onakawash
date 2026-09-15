export type PitchLevel = "H" | "L";

export type TokyoPitchPattern = {
  word: PitchLevel[];
  continuation: PitchLevel;
};

/**
 * Calculates a learner-friendly Tokyo pitch-accent pattern.
 *
 * accent:
 * 0 = heiban / no accent nucleus
 * 1 = drop after mora 1
 * 2 = drop after mora 2
 * ...
 *
 * Examples:
 *
 * 2 mora + accent 1
 * -> H L
 *
 * 3 mora + accent 0
 * -> L H H
 *
 * 3 mora + accent 3
 * -> L H H
 *
 * With a following particle:
 *
 * accent 0 -> particle stays H
 * accent 3 -> particle becomes L
 */
export function calculateTokyoPitch(
  morae: string[],
  accent: number,
): TokyoPitchPattern {
  const moraCount = morae.length;

if (moraCount === 0) {
  return {
    word: [],
    continuation: "H",
  };
}

  if (!Number.isInteger(accent)) {
    throw new Error("Accent number must be an integer.");
  }

  if (accent < 0 || accent > moraCount) {
    throw new Error(
      `Invalid accent number ${accent} for a ${moraCount}-mora word.`,
    );
  }

  const word: PitchLevel[] = [];

  for (let index = 0; index < moraCount; index++) {
    const moraNumber = index + 1;

    // Type 1: first mora is high,
    // everything after the accent nucleus is low.
    if (accent === 1) {
      word.push(moraNumber === 1 ? "H" : "L");
      continue;
    }

    // One-mora heiban word.
    if (moraCount === 1 && accent === 0) {
      word.push("L");
      continue;
    }

    // For non-initial accent and heiban:
    // the first mora is normally low.
    if (moraNumber === 1) {
      word.push("L");
      continue;
    }

    // Heiban: no lexical drop.
    if (accent === 0) {
      word.push("H");
      continue;
    }

    // Before or on the accent nucleus = high.
    // After the nucleus = low.
    word.push(moraNumber <= accent ? "H" : "L");
  }

  /*
   * Common textbook treatment of an initial sokuon:
   *
   * がっこう etc.
   *
   * Small っ does not receive the ordinary initial rise,
   * so keep the second mora low when appropriate.
   *
   * This is still a learner-oriented symbolic contour,
   * not an acoustic F0 simulation.
   */
  if (
    moraCount >= 2 &&
    (morae[1] === "っ" || morae[1] === "ッ") &&
    accent !== 1
  ) {
    word[1] = "L";
  }

  const continuation: PitchLevel =
  accent === 0 ? "H" : "L";

return {
  word,
  continuation,
};
}