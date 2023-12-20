import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
  name: "trainerName",
  initialState: {
    name: "",
  },
  reducers: {
    setTreinerName: (state, action) => {
      const newTrainerName = action.payload;
      state.name = newTrainerName;
    },
  },
});

export const { setTreinerName } = trainerNameSlice.actions;

export default trainerNameSlice.reducer;
