import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    booksForBuy: []
}

const korzina = createSlice({
      name: 'korzina',
      initialState,
      reducers: {
        buy: (state, {payload})=>{
            state.booksForBuy = [...state.booksForBuy, payload.name]
            console.log('добавлено книга ' + payload.name)
        }
      }
})

export const {buy} = korzina.actions

export default korzina.reducer