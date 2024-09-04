
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FestivalState {
  festivals: Array<any>; // 데이터를 받을 형식에 맞게 타입 지정
  totalCount: number;
}

const initialState:FestivalState = {
    festivals: [],
    totalCount: 0, 
}

const festivalSlice = createSlice({
  name: 'festival',
  initialState,
  reducers: {
    setFestivals: (state, action: PayloadAction<{ festivals: any[], totalCount: number }>) => {
      state.festivals = action.payload.festivals;
      state.totalCount = action.payload.totalCount;
    },
  },
});
export const { setFestivals } = festivalSlice.actions;
export default festivalSlice.reducer;