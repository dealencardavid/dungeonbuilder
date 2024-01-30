import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const MONSTERS_API_ENDPOINT = "https://www.dnd5eapi.co/api/monsters/";

export const fetchMonsters = createAsyncThunk(
  "monsters/fetchMonsters",
  async function () {
    const res = await fetch(MONSTERS_API_ENDPOINT);
    const data = await res.json();
    return data.results;
  }
);

const initialState = {
  monsters: [],
  //   status could be idle, loading, succeeded or failed
  status: "idle",
  error: null,
};

const monstersSlice = createSlice({
  name: "monsters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonsters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMonsters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.monsters = action.payload;
      })
      .addCase(fetchMonsters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default monstersSlice.reducer;
