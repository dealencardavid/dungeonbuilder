import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  calculateXPSum,
  calculateAdjustedXPSum,
} from "../../utilities/helpers";

// Fetch monster details
const fetchMonsterDetails = async function (monsterIndex) {
  const res = await fetch(
    `https://www.dnd5eapi.co/api/monsters/${monsterIndex}`
  );
  const data = await res.json();
  return data;
};

export const addMonsterToEncounter = createAsyncThunk(
  "encounters/addMonsterToEncounter",
  async function ({ encounterId, monsterIndex }) {
    try {
      // Fetch monster details from API
      const monsterDetails = await fetchMonsterDetails(monsterIndex);
      return { encounterId, monsterIndex, monsterDetails };
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  encounters: [{ id: 0, monsters: [], xpSum: 0, xpAdjusted: 0 }],
};

let nextEncounterId = 1;

const encountersSlice = createSlice({
  name: "encounters",
  initialState,
  reducers: {
    addEncounter(state) {
      const newEncounter = {
        id: nextEncounterId++,
        monsters: [],
        xpSum: 0,
        xpAdjusted: 0,
      };
      return { ...state, encounters: [...state.encounters, newEncounter] };
    },
    incrementMonster(state, action) {
      const { encounterId, monsterIndex } = action.payload;

      const targetMonster = state.encounters[encounterId].monsters.findIndex(
        (monster) => monster.details.index === monsterIndex
      );

      if (targetMonster === -1) return { ...state };

      const newEncounters = [...state.encounters].map((encounter) => {
        if (encounter.id === encounterId) {
          const decrementedMonsters = encounter.monsters.map((monster, i) =>
            i === targetMonster
              ? { ...monster, quantity: Math.max(monster.quantity + 1, 1) }
              : monster
          );

          return {
            ...encounter,
            monsters: decrementedMonsters,
          };
        }

        return encounter;
      });

      const updatedEncounters = newEncounters.map((encounter) => {
        return {
          ...encounter,
          xpSum: calculateXPSum(encounter.monsters),
          xpAdjusted: calculateAdjustedXPSum(encounter.monsters),
        };
      });

      return { ...state, encounters: updatedEncounters };
    },
    decrementMonster(state, action) {
      const { encounterId, monsterIndex } = action.payload;

      const targetMonster = state.encounters[encounterId].monsters.findIndex(
        (monster) => monster.details.index === monsterIndex
      );

      if (targetMonster === -1) return { ...state };

      const newEncounters = [...state.encounters].map((encounter) => {
        if (encounter.id === encounterId) {
          const decrementedMonsters = encounter.monsters.map((monster, i) =>
            i === targetMonster
              ? { ...monster, quantity: Math.max(monster.quantity - 1, 1) }
              : monster
          );

          return {
            ...encounter,
            monsters: decrementedMonsters,
          };
        }

        return encounter;
      });

      const updatedEncounters = newEncounters.map((encounter) => {
        return {
          ...encounter,
          xpSum: calculateXPSum(encounter.monsters),
          xpAdjusted: calculateAdjustedXPSum(encounter.monsters),
        };
      });

      return { ...state, encounters: updatedEncounters };
    },
    deleteMonster(state, action) {
      const { encounterId, monsterIndex } = action.payload;

      const targetMonster = state.encounters[encounterId].monsters.findIndex(
        (monster) => monster.details.index === monsterIndex
      );

      if (targetMonster === -1) return { ...state };

      const newEncounters = [...state.encounters].map((encounter) => {
        if (encounter.id === encounterId) {
          return {
            ...encounter,
            monsters: encounter.monsters.filter((_, i) => i !== targetMonster),
          };
        }
        return encounter;
      });

      const updatedEncounters = newEncounters.map((encounter) => {
        return {
          ...encounter,
          xpSum: calculateXPSum(encounter.monsters),
          xpAdjusted: calculateAdjustedXPSum(encounter.monsters),
        };
      });

      return { ...state, encounters: updatedEncounters };
    },
    deleteEncounter(state, action) {
      state.encounters = state.encounters.filter(
        (encounter) => encounter.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMonsterToEncounter.fulfilled, (state, action) => {
      const { encounterId, monsterIndex, monsterDetails } = action.payload;

      const targetEncounterIndex = state.encounters.findIndex(
        (encounter) => encounter.id === parseInt(encounterId)
      );

      if (targetEncounterIndex === -1) {
        return { ...state };
      }

      const targetMonsterIndex = state.encounters[
        targetEncounterIndex
      ].monsters.findIndex((monster) => monster.index === monsterIndex);

      const newEncounters = state.encounters.map((encounter, index) => {
        if (index === targetEncounterIndex) {
          return {
            ...encounter,
            monsters:
              targetMonsterIndex !== -1
                ? encounter.monsters.map((m, i) =>
                    i === targetMonsterIndex
                      ? { ...m, quantity: m.quantity + 1 }
                      : m
                  )
                : [
                    ...encounter.monsters,
                    {
                      index: monsterIndex,
                      quantity: 1,
                      details: monsterDetails,
                    },
                  ],
          };
        }
        return encounter;
      });

      const updatedEncounters = newEncounters.map((encounter) => {
        return {
          ...encounter,
          xpSum: calculateXPSum(encounter.monsters),
          xpAdjusted: calculateAdjustedXPSum(encounter.monsters),
        };
      });

      return { ...state, encounters: updatedEncounters };
    });
  },
});

export const {
  addEncounter,
  deleteEncounter,
  incrementMonster,
  decrementMonster,
  deleteMonster,
} = encountersSlice.actions;
export default encountersSlice.reducer;
