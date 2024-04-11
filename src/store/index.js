import { configureStore } from '@reduxjs/toolkit'
import toDoAsync from './slices/toDoAsync'

export default configureStore({
    reducer: {
        toDos: toDoAsync
    }
})