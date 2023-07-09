import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "login",
    initialState: {
        // email: 'directors@cmsl.com',
        // password: 'Director@cmsl%1234??',
        email: 'aliimran@cmsl.com',
        password: '12345678',
        // email: 'naseer.ahmed@zoaenergysolutions.co.uk',
        // password: 'Naseer@zoa',
        // email: '',
        // password: '',
        isSecure: true,
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
        setIsSecure: ((state, action) => {
            state.isSecure = !state.isSecure;
        }),
        setErrorText: ((state, action) => {
            state.error = action.payload;
        }),
    },
});
export const { setEmail, setIsLoading, setPassword, setIsSecure, setErrorText } = slice.actions;
export const loginReducer = slice.reducer;