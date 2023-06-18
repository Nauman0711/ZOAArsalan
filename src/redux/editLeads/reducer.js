import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "editLeads",
    initialState: {
        photosData: [],
        notes: '',
        isLoading: false
    },
    reducers: {
        setPhotosData: ((state, action) => {
            state.photosData = action.payload;
        }),
        setNotes: ((state, action) => {
            state.notes = action.payload;
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
    },
});
export const { setPhotosData, setIsLoading, setNotes } = slice.actions;
export const editLeadsReducer = slice.reducer;