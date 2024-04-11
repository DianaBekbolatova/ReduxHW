import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchToDos = createAsyncThunk(
    'toDos/fetchToDos',
    async function (){
        const resp = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
        const data = await resp.json()
        console.log(data)
        return data
    }
)

const initialState = {
    toDos: []
}

const toDoAsync = createSlice({
    name: 'toDos',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchToDos.fulfilled, (state, action) =>{
            state.toDos = action.payload
        })
    }
})
       

export const {toDos} = toDoAsync.actions

export default toDoAsync.reducer