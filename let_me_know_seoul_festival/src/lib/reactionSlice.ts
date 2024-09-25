import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Reaction {
  borderHighlight: boolean;
  hideSearchIcon: boolean;
}

const initialState:Reaction = {
  borderHighlight: false,
  hideSearchIcon: false
}

const reaction = createSlice({
  name: 'react',
  initialState,
  reducers: {
    borderHighlight: (state, action: PayloadAction<{borderHighlight: boolean}>) => {
      state.borderHighlight = action.payload.borderHighlight;
    },
    hideSearchIcon: (state,action: PayloadAction<{hideSearchIcon: boolean}>) => {
      state.hideSearchIcon = action.payload.hideSearchIcon
    },
  },
})

// Action creators are generated for each case reducer function
export const { borderHighlight, hideSearchIcon } = reaction.actions

export default reaction.reducer