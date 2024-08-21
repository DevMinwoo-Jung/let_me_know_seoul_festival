
import { createSlice } from '@reduxjs/toolkit';

const festivalSlice = createSlice({
  name: 'festival',
  initialState: [],
  reducers: {
    increment: (state) => [...state],
    decrement: (state) => [...[]],
  },
});
export const { increment, decrement } = festivalSlice.actions;
export default festivalSlice.reducer;