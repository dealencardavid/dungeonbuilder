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
  encounters: [{ id: 1, monsters: [], xpSum: 0, xpAdjusted: 0 }],
};

let nextEncounterId = 2;

const encountersSlice = createSlice({
  name: "encounters",
  initialState,
  reducers: {
    addEncounter(state) {
      const newEncounter = {
        id: nextEncounterId++,
        monsters: [],
        xpSum: 0,
      };
      return { ...state, encounters: [...state.encounters, newEncounter] };
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

      // Find the target encounter
      const targetEncounterIndex = state.encounters.findIndex(
        (encounter) => encounter.id === parseInt(encounterId)
      );
      // If the encounter is not found, return the original state
      if (targetEncounterIndex === -1) {
        return state;
      }

      // Create a copy of the encounters array
      const updatedEncounters = [...state.encounters];

      // Find the target monster within the encounter
      const targetMonsterIndex = updatedEncounters[
        targetEncounterIndex
      ].monsters.findIndex((monster) => monster.index === monsterIndex);

      // Create a new state object with the updated encounters array
      const newState = {
        ...state,
        encounters: updatedEncounters.map((encounter, index) => {
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
              xpSum: calculateXPSum(encounter.monsters, monsterDetails.xp),
              xpAdjusted: calculateAdjustedXPSum(
                encounter.monsters,
                monsterDetails,
                1
              ),
            };
          }
          return encounter;
        }),
      };
      return newState;
    });
  },
});

export const { addEncounter, deleteEncounter } = encountersSlice.actions;
export default encountersSlice.reducer;
