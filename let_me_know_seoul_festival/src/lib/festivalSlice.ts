
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FestivalState {
  festivals: Array<any>; // 데이터를 받을 형식에 맞게 타입 지정
  totalCount: number;
  currentPage: number;
  startNumber: number;
  endNumber: number;
}

export const initialState:FestivalState = {
    festivals: [],
    totalCount: 0, 
    currentPage: 1,
    startNumber: 1,
    endNumber: 25,
}

const festivals = createSlice({
  name: 'festival',
  initialState,
  reducers: {
    setFestivals: (state, action: PayloadAction<{ festivals: any[] }>) => {
      state.festivals = action.payload.festivals;
    },
    setTotalCount: (state, action: PayloadAction<{ totalCount: number }>) => {
      state.totalCount = action.payload.totalCount;
    },
    setPageNumber: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage;
    },
    setStartNumber: (state, action: PayloadAction<{ startNumber: number }>) => {
      state.startNumber = action.payload.startNumber;
    },
    setEndNumber: (state, action: PayloadAction<{ endNumber: number }>) => {
      state.endNumber = action.payload.endNumber;
    },
  },
});
export const { setFestivals, setTotalCount, setPageNumber, setStartNumber, setEndNumber } = festivals.actions;
export default festivals.reducer;