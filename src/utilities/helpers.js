import { DC_PERCENTAGE_BAND } from "../configs/config";

// Helper function to calculate XP sum based on the monsters in the encounter
export function calculateXPSum(monsters) {
  return monsters.reduce(
    (sum, monster) => sum + monster.details.xp * monster.quantity,
    0
  );
}

// Helper function to calculate the adjusted XP
export function calculateAdjustedXPSum(monsters) {
  const totalMonsters = monsters.reduce(
    (total, monster) => total + monster.quantity,
    0
  );
  const xpSum = monsters.reduce(
    (sum, monster) => sum + monster.details.xp * monster.quantity,
    0
  );

  if (totalMonsters === 1) {
    return xpSum * 1;
  } else if (totalMonsters === 2) {
    return xpSum * 1.5;
  } else if (totalMonsters >= 3 && totalMonsters <= 6) {
    return xpSum * 2;
  } else if (totalMonsters >= 7 && totalMonsters <= 10) {
    return xpSum * 2.5;
  } else if (totalMonsters >= 11 && totalMonsters <= 14) {
    return xpSum * 3;
  } else {
    return xpSum * 4;
  }
}

// Helper function to calculate the DC xpThreshold of the parties
export const calculateXpThresholds = (parties) => {
  const xpThresholdsByLevel = {
    1: { easy: 25, medium: 50, hard: 75, deadly: 100, daily: 300 },
    2: { easy: 50, medium: 100, hard: 150, deadly: 200, daily: 600 },
    3: { easy: 75, medium: 150, hard: 225, deadly: 400, daily: 1200 },
    4: { easy: 125, medium: 250, hard: 375, deadly: 500, daily: 1700 },
    5: { easy: 250, medium: 500, hard: 750, deadly: 1100, daily: 3500 },
    6: { easy: 300, medium: 600, hard: 900, deadly: 1400, daily: 4000 },
    7: { easy: 350, medium: 750, hard: 1100, deadly: 1700, daily: 5000 },
    8: { easy: 450, medium: 900, hard: 1400, deadly: 2100, daily: 6000 },
    9: { easy: 550, medium: 1100, hard: 1600, deadly: 1700, daily: 7500 },
    10: { easy: 600, medium: 1200, hard: 1900, deadly: 2400, daily: 9000 },
    11: { easy: 800, medium: 1600, hard: 2400, deadly: 3600, daily: 10500 },
    12: { easy: 1000, medium: 2000, hard: 3000, deadly: 4500, daily: 11500 },
    13: { easy: 1100, medium: 2200, hard: 3400, deadly: 5100, daily: 13500 },
    14: { easy: 1250, medium: 2500, hard: 3800, deadly: 5700, daily: 15000 },
    15: { easy: 1400, medium: 2800, hard: 4300, deadly: 6400, daily: 18000 },
    16: { easy: 1600, medium: 3200, hard: 4800, deadly: 7200, daily: 20000 },
    17: { easy: 2000, medium: 3900, hard: 5900, deadly: 8800, daily: 25000 },
    18: { easy: 2100, medium: 4200, hard: 6300, deadly: 9500, daily: 27000 },
    19: { easy: 2400, medium: 4900, hard: 6300, deadly: 9500, daily: 30000 },
    20: { easy: 2800, medium: 5700, hard: 8500, deadly: 12700, daily: 40000 },
  };
  const thresholds = { easy: 0, medium: 0, hard: 0, deadly: 0, daily: 0 };

  parties.forEach((party) => {
    const { level, players } = party;
    const thresholdsForLevel = xpThresholdsByLevel[level] || {
      easy: 0,
      medium: 0,
      hard: 0,
      deadly: 0,
      daily: 0,
    };

    Object.keys(thresholdsForLevel).forEach((difficulty) => {
      thresholds[difficulty] += thresholdsForLevel[difficulty] * players;
    });
  });

  return thresholds;
};

// function that defines relationship between xpThreshold and actual xpAjustedSum
export function getDifficulty(xp, threshold) {
  if (xp <= threshold.easy * DC_PERCENTAGE_BAND) {
    return { label: "Easy", style: " bg-mainBlue-400" };
  } else if (xp <= threshold.medium * DC_PERCENTAGE_BAND) {
    return { label: "Medium", style: " bg-success-500" };
  } else if (xp <= threshold.hard * DC_PERCENTAGE_BAND) {
    return { label: "Hard", style: " bg-mainOrange-500" };
  } else if (xp <= threshold.deadly * DC_PERCENTAGE_BAND) {
    return { label: "Deadly", style: " bg-danger-500" };
  } else {
    return { label: "Deathouse", style: " bg-black" };
  }
}
