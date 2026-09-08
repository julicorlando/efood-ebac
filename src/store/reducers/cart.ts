import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Dish } from '../../data/restaurants'

type CartState = {
  items: Dish[]
}

const initialState: CartState = {
  items: []
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
    }
  }
})

export const { adicionar, remover, limpar } = cartSlice.actions
export default cartSlice.reducer
