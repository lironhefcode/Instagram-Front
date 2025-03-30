import { configureStore } from '@reduxjs/toolkit'
import  storiesReducer  from './slices/sotries-slice'
import userReducer  from './slices/user-slice'

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
