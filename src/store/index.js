import { configureStore } from '@reduxjs/toolkit'
import toDoAsync from './slices/toDoAsync'
import { toDoAPI } from './api/toDoApi'

export default configureStore({
    reducer: {
        toDos: toDoAsync
    //     [toDoAPI.reducerPath]: toDoAPI.reducer},
    // middleware: (defaultMiddleware) => defaultMiddleware().concat(toDoAPI.middleware)
    }})