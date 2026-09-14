import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Dish } from '../../data/restaurants'

type CartState = {
  items: Dish[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    },
    limpar: (state) => {
      state.items = []
    },
    abrir: (state) => {
      state.isOpen = true
    },
    fechar: (state) => {
      state.isOpen = false
    }
  }
})

export const { adicionar, remover, limpar, abrir, fechar } = cartSlice.actions
export default cartSlice.reducer
