import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
    leadsSubmission: [],
    isLoading: false
}
const slice = createSlice({
    name: "submission",
    initialState,
    reducers: {
        setLeadsSubmission: ((state, action) => {
            state.leadsSubmission = action.payload;
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
    },
    extraReducers: (builder) => {
        builder.addCase('resetSubmission', () => {
            return initialState;
        })
    }
});
export const { setLeadsSubmission, setIsLoading } = slice.actions;
export const submissionReducer = slice.reducer;