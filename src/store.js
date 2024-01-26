import { configureStore } from "@reduxjs/toolkit";
import encountersReducer from "./features/encounters/encountersSlice";
import monstersReducer from "./features/monsters/monstersSlice";
import partyReducer from "./features/party/partySlice";

const store = configureStore({
  reducer: {
    encounters: encountersReducer,
    monsters: monstersReducer,
    party: partyReducer,
  },
});

export default store;
