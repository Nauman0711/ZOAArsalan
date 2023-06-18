import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "createPassword",
    initialState: {
        oldPassword: '',
        newPassword: '',
        cPassword: '',
        error: '',
        isLoading: false
    },
    reducers: {
        setOldPassword: ((state, action) => {
            state.oldPassword = action.payload;
        }),
        setNewPassword: ((state, action) => {
            state.newPassword = action.payload;
        }),
        setCPassword: ((state, action) => {
            state.cPassword = action.payload;
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        setErrorText: ((state, action) => {
            state.error = action.payload;
        }),
    },
});
export const { setOldPassword, setCPassword, setNewPassword, setIsLoading, setErrorText } = slice.actions;
export const createPasswordReducer = slice.reducer;