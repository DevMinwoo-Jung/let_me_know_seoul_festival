
import { PerformanceI } from '@/app/Utils/dataType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FestivalState {
  festivals: Array<PerformanceI>; // 데이터를 받을 형식에 맞게 타입 지정
  totalCount: number;
  currentPage: number;
  startNumber: number;
  endNumber: number;
  codeCategory: Array<string>;
  guCategory: Array<string>;
}

export const initialState:FestivalState = {
    festivals: [],
    totalCount: 0, 
    currentPage: 1,
    startNumber: 1,
    endNumber: 25,
    codeCategory: [],
    guCategory: []
}

const festivals = createSlice({
  name: 'festival',
  initialState,
  reducers: {
    setFestivals: (state, action: PayloadAction<{ festivals: PerformanceI[] }>) => {
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
    setGuCategory: (state, action: PayloadAction<{ guCategory: string[] }>) => {
      state.guCategory = action.payload.guCategory;
    },
    setCodeCategory: (state, action: PayloadAction<{ codeCategory: string[] }>) => {
      state.codeCategory = action.payload.codeCategory;
    },
  },
});
export const { setFestivals, setTotalCount, setPageNumber, setStartNumber, 
                setEndNumber, setCodeCategory, setGuCategory } = festivals.actions;
export default festivals.reducer;