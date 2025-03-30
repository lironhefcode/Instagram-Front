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
  name: 'story',
  initialState,
  reducers: {
    load: (state,action: PayloadAction<Story[]>) => {
      state.stories = action.payload
    },
    add: (state,action: PayloadAction<Story>) => {
      state.stories = [...state.stories,action.payload ]
    },
   
  },
})

export const { load, add, } = storiesSlice.actions
export const selectStories = (state: {stories: stoiresState}) => state.stories.stories
export default storiesSlice.reducer
