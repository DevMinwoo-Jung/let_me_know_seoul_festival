import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Reaction {
  borderHighlight: boolean;
  showSearchIcon: boolean;
  showSetting: boolean;
  isInfiniteMode: string;
  isDarkMode: string;
}

const initialState:Reaction = {
  borderHighlight: false,
  showSearchIcon: true,
  showSetting: false,
  isInfiniteMode: 'scroll',
  isDarkMode: 'light'
}

const reaction = createSlice({
  name: 'react',
  initialState,
  reducers: {
    setborderHighlight: (state, action: PayloadAction<{borderHighlight: boolean}>) => {
      state.borderHighlight = action.payload.borderHighlight;
    },
    setshowSearchIcon: (state,action: PayloadAction<{showSearchIcon: boolean}>) => {
      state.showSearchIcon = action.payload.showSearchIcon
    },
    setShowSetting: (state,action: PayloadAction<{showSetting: boolean}>) => {
      state.showSetting = action.payload.showSetting
    },
    setIsInfiniteMode: (state,action: PayloadAction<{isInfiniteMode: string}>) => {
      state.isInfiniteMode = action.payload.isInfiniteMode
    },
    setIsDarkMode: (state,action: PayloadAction<{isDarkMode: string}>) => {
      state.isDarkMode = action.payload.isDarkMode
    },
  },
})

export const { setborderHighlight, setshowSearchIcon, setIsInfiniteMode, setShowSetting, setIsDarkMode } = reaction.actions

export default reaction.reducer