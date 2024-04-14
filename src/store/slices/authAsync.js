import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const logAuthFunc = async (userLog) => {
    const { login, pass } = userLog
    return login === initialState.user.login && pass === initialState.user.pass
}

const initialState = {
    isAuth: false,
    user: {
        login: 'Diana',
        pass: '456'
    }
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userLog) => {
        const response = await logAuthFunc(userLog)
        return response
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isAuth = action.payload
        })
    }
})

export default authSlice.reducer
