import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "leads",
    initialState: {
        leadsData: [],
        error: '',
        isLoading: false
    },
    reducers: {
        setLeadsData: ((state, action) => {
            state.leadsData = action.payload;
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        setErrorText: ((state, action) => {
            state.error = action.payload;
        }),
    },
});
export const { setLeadsData, setIsLoading, setErrorText, } = slice.actions;
export const leadsReducer = slice.reducer;