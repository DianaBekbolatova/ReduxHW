import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slices/bookSlice'
import korzina from './slices/korzina'

export default configureStore({
    reducer: {
        books: bookSlice,
        korzina: korzina
    }
})