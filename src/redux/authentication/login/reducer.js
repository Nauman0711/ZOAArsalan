import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "login",
    initialState: {
        // email: 'directors@cmsl.com',
        // password: 'Director@cmsl%1234??',
        email: '',
        password: '',
        error: '',
        isLoading: false
    },
    reducers: {
        setEmail: ((state, action) => {
            state.email = action.payload;
        }),
        setPassword: ((state, action) => {
            state.password = action.payload;
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        setErrorText: ((state, action) => {
            state.error = action.payload;
        }),
    },
});
export const { setEmail, setIsLoading, setPassword, setErrorText } = slice.actions;
export const loginReducer = slice.reducer;