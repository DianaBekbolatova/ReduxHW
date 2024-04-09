import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    books : [
        {
         id: 1,
         name: 'Азбука'
        },
        {
         id: 2,
         name: '1984'
        },
        {
         id: 3,
         name: 'Как выучить JS за 2 дня'
        },
        {
         id: 4,
         name: 'Как нас обманывают книгИ'
        }
    ]
}


const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, {payload})=>{
            state.books = payload
        },
        add: (state, {payload})=>{
           state.books.push(payload)
        },
        del: (state, {payload})=>{
          state.books = state.books.filter(book => book.id !== payload)
        },
        filter: (state)=>{
        state.books.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()){
                return -1
            }else if(a.name.toLowerCase() > b.name.toLowerCase()){
                return 1
            } return 0
        })
        }}
})
       


export const { add, filter, del, setBooks } = bookSlice.actions

export default bookSlice.reducer