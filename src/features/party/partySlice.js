import { createSlice } from "@reduxjs/toolkit";
import { calculateXpThresholds } from "../../utilities/helpers";

const initialState = {
  party: [{ players: 0, level: 0 }],
  xpThreshold: {
    easy: 0,
    medium: 0,
    hard: 0,
    deadly: 0,
    daily: 0,
  },
};

const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {
    addParty(state) {
      const newParty = {
        players: 0,
        level: 0,
      };
      return { ...state, party: [...state.party, newParty] };
    },
    updateParty(state, action) {
      const { index, newParty } = action.payload;
      const updatedParties = state.party.map((party, i) =>
        index === i ? { ...party, players: parseInt(newParty) || 0 } : party
      );

      return {
        ...state,
        party: updatedParties,
        xpThreshold: calculateXpThresholds(updatedParties),
      };
    },
    updateLevel(state, action) {
      const { index, newLevel } = action.payload;
      const updatedLevels = state.party.map((party, i) =>
        index === i ? { ...party, level: parseInt(newLevel) || 0 } : party
      );

      return {
        ...state,
        party: updatedLevels,
        xpThreshold: calculateXpThresholds(updatedLevels),
      };
    },
    deleteParty(state, action) {
      const { index } = action.payload;
      const updatedParties = state.party.filter((_, i) => i !== index);
      return {
        ...state,
        party: updatedParties,
      };
    },
  },
});

export const { addParty, updateParty, updateLevel, deleteParty } =
  partySlice.actions;

export default partySlice.reducer;
