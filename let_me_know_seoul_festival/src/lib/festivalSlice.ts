
import { PerformanceI } from '@/app/Utils/dataType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FestivalState {
  festivals: Array<PerformanceI>; // 데이터를 받을 형식에 맞게 타입 지정
  totalCount: number;
  currentPage: number;
  startNumber: number;
  endNumber: number;
  codeCategory: Array<string>;
  codeName: string;
  date: string;
  title: string;
  isEmpty: boolean;
}

export const initialState:FestivalState = {
    festivals: [],
    totalCount: 0, 
    currentPage: 1,
    startNumber: 1,
    endNumber: 25,
    codeCategory: ["전체","교육/체험", "국악", "기타", "독주/독창회", "무용", "뮤지컬/오페라", "연극", "영화", "전시/미술", "축제-기타", "축제-문화예술", "축제-시민화합", "축제-자연/경관", "죽제-전통/역사", "콘서트", "클래식"],
    codeName: " ",
    date: " ",
    title: " ",
    isEmpty: false,
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
    setCodeCategory: (state, action: PayloadAction<{ codeCategory: string[] }>) => {
      state.codeCategory = action.payload.codeCategory;
    },
    setCodeName: (state, action: PayloadAction<{ codeName: string }>) => {
      state.codeName = action.payload.codeName;
    },
    setTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title;
    },
    setDate: (state, action: PayloadAction<{ date: string }>) => {
      state.date = action.payload.date;
    },
    setIsEmpty: (state, action: PayloadAction<{ isEmpty: boolean }>) => {
      state.isEmpty = action.payload.isEmpty;
    },
  },
});
export const { setFestivals, setTotalCount, setPageNumber, setStartNumber, 
                setEndNumber, setCodeCategory, setCodeName, setDate, setTitle, setIsEmpty } = festivals.actions;
export default festivals.reducer;