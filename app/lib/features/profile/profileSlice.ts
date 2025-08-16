import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string;
}
const initialState: ProfileState = {
  name: "Guest User",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearName: (state) => {
      state.name = "";
    },
    resetName: (state) => {
      state.name = "Guest User";
    },
  },
});

export const { setName, clearName, resetName } = profileSlice.actions;

export default profileSlice.reducer;
