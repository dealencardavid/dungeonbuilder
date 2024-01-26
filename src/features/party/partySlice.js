import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  party: [{ players: 0, level: 1 }],
  dailyBudget: 0,
  xpThreshold: "easy",
};

const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {
    addParty(state) {
      const newParty = {
        players: 0,
        level: 1,
      };
      return { ...state, party: [...state.party, newParty] };
    },
  },
});

export const { addParty } = partySlice.actions;

export default partySlice.reducer;
