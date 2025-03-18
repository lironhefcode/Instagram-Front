import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { story } from '../../moudels/stroyInterface'

export interface stoiresState {
  stories: story[]
}

const initialState: stoiresState = {
  stories: []
}

export const storiesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    load: (state,action: PayloadAction<story[]>) => {
      state.stories = action.payload
    },
    add: (state,action: PayloadAction<story>) => {
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
