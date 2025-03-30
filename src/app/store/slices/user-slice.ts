import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Story } from '../../models/stroyInterface'
import { User } from '../../models/userInterface'

export interface UserState {
    user:User | null
}

const initialState: UserState = {
    user :null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },

  },
})

export const { login, logout, } = userSlice.actions
export const selectUser = (state: {userState: UserState}) => state.userState.user
export default userSlice.reducer
