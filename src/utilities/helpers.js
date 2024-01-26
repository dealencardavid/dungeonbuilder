// Helper function to calculate XP sum based on the monsters in the encounter
export function calculateXPSum(monsters, newMonsterXP) {
  return (
    monsters.reduce(
      (sum, monster) => sum + (monster.details.xp || 0) * monster.quantity,
      0
    ) + newMonsterXP
  );
}

// Helper function to calculate the adjusted XP
export function calculateAdjustedXPSum(
  monsters,
  newMonsterDetails,
  newMonsterQuantity
) {
  const totalMonsters = monsters.reduce(
    (total, monster) => total + monster.quantity,
    0
  );
  const xpSum = monsters.reduce(
    (sum, monster) => sum + (monster.details.xp || 0) * monster.quantity,
    0
  );

  const numberOfMonsters = totalMonsters + newMonsterQuantity;

  if (numberOfMonsters === 1) {
    return (xpSum + (newMonsterDetails.xp || 0) * newMonsterQuantity) * 1;
  } else if (numberOfMonsters === 2) {
    return (xpSum + (newMonsterDetails.xp || 0) * newMonsterQuantity) * 1.5;
  } else if (numberOfMonsters >= 3 && numberOfMonsters <= 6) {
    return (xpSum + (newMonsterDetails.xp || 0) * newMonsterQuantity) * 2;
  } else if (numberOfMonsters >= 7 && numberOfMonsters <= 10) {
    return (xpSum + (newMonsterDetails.xp || 0) * newMonsterQuantity) * 2.5;
  } else if (numberOfMonsters >= 11 && numberOfMonsters <= 14) {
    return (xpSum + (newMonsterDetails.xp || 0) * newMonsterQuantity) * 3;
  } else {
    return (xpSum + (newMonsterDetails.xp || 0) * newMonsterQuantity) * 4;
  }
}
