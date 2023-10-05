// user.ts (ou onde você está definindo seu store user)
/* eslint-disable @typescript-eslint/no-shadow */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IProfile {
  token: string
  name: string
}

export interface UserState {
  user: IProfile | null
}

export interface UserActions {
  setUser: (user: IProfile) => void
  clearUserData: () => void
}

const storageName = 'storage-frutaFeira'

const initialState: UserState = {
  user: null,
}

const user = create(
  persist<UserState & UserActions>(
    (set) => ({
      ...initialState,

      setUser: (user: IProfile) => {
        set({ user })
      },
      clearUserData: () => {
        set({ user: null })
        localStorage.removeItem(storageName)
      },
    }),
    {
      name: storageName,
    },
  ),
)

export default user
