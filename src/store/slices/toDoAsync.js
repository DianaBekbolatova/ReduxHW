import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchToDos = createAsyncThunk(
    'toDos/fetchToDos',
    async function (arg, {rejectWithValue}){
        try {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
            if(!resp.ok){
                throw Error('Сервер недоступен')
            }
            const data = await resp.json()
            console.log(data)
            return data
        } catch (error) {
           return rejectWithValue(error)
        }
    }
)

const initialState = {
    toDos: [],
    status: 'unloading',
    error: false
}

const toDoAsync = createSlice({
    name: 'toDos',

    initialState,
    reducers: {
        del: (state, {payload})=>{
            state.toDos = state.toDos.filter(toDos => toDos.id !== payload)
          },
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchToDos.pending, (state) =>{
            state.status = 'loading'
        })
        builder.addCase(fetchToDos.fulfilled, (state, action) =>{
            state.toDos = action.payload
            state.status = 'full'
        })
        builder.addCase(fetchToDos.rejected, (state, action) =>{
            state.error = action.payload
            state.status = 'full'
        })
    }
})
       

export const {toDos, del} = toDoAsync.actions

export default toDoAsync.reducer