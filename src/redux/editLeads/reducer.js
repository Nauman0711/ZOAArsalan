import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "editLeads",
    initialState: {
        photosData: [],
        notes: '',
        selectedFiles: [],
        files: [],
        isLoading: false
    },
    reducers: {
        setPhotosData: ((state, action) => {
            state.photosData = action.payload;
        }),
        setSelectedFiles: ((state, action) => {
            state.selectedFiles = action.payload;
        }),
        setFiles: ((state, action) => {
            state.files = action.payload;
        }),
        setNotes: ((state, action) => {
            state.notes = action.payload;
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        updateFileProgress: ((state, action) => {
            const { sFile, progress } = action.payload;
            state.files = state.files.map(file => {
                if (file.fileName === sFile.fileName) {
                    return { ...file, progress };
                }
                return file;
            });
        }),
        clearFileProgress: ((state) => {
            state.files = [];
            state.selectedFiles = []
        }),
    },
});
export const { setPhotosData, setIsLoading, setNotes, setFiles, setSelectedFiles, updateFileProgress, clearFileProgress } = slice.actions;
export const editLeadsReducer = slice.reducer;