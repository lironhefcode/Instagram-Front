import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Story } from '../../models/stroyInterface'

export interface stoiresState {
  stories: Story[]
}

const initialState: stoiresState = {
  stories: []
}

export const storiesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    load: (state,action: PayloadAction<Story[]>) => {
      state.stories = action.payload
    },
    add: (state,action: PayloadAction<Story>) => {
      state.stories = [...state.stories,action.payload ]
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { load, add, } = storiesSlice.actions
export const selectStories = (state: {stories: stoiresState}) => state.stories.stories
export default storiesSlice.reducer
