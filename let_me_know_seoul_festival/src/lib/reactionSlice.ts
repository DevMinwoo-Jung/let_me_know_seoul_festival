import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Reaction {
  borderHighlight: boolean;
  showSearchIcon: boolean;
}

const initialState:Reaction = {
  borderHighlight: false,
  showSearchIcon: true
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
  },
})

// Action creators are generated for each case reducer function
export const { setborderHighlight, setshowSearchIcon } = reaction.actions

export default reaction.reducer