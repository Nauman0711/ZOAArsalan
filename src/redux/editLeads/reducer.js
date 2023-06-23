import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
    photosData: [],
    note: '',
    selectedFiles: [],
    isUploaded: false,
    files: [],
    buttons: ['Data', 'Comments'],
    comments: [],
    comment: '',
    selectedBtn: 'Data',
    isLoading: false,
    commentIsLoading: false
}
const slice = createSlice({
    name: "editLeads",
    initialState,
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
            state.note = action.payload;
        }),
        setButtons: ((state, action) => {
            state.buttons = action.payload;
        }),
        setComments: ((state, action) => {
            state.comments = action.payload;
        }),
        setUpdatedComments: ((state, action) => {
            state.comment = ""
            state.comments = [...state.comments, action.payload];
        }),
        setComment: ((state, action) => {
            state.comment = action.payload;
        }),
        setSelectedBtn: ((state, action) => {
            state.selectedBtn = action.payload;
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        setCommentIsLoading: ((state, action) => {
            state.commentIsLoading = action.payload;
        }),
        setIsUploaded: ((state, action) => {
            state.isUploaded = action.payload;
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
    extraReducers: (builder) => {
        builder.addCase('resetEditLeads', () => {
            return initialState;
        })
    }
});
export const { setPhotosData, setIsLoading, setNotes, setFiles, setSelectedFiles, updateFileProgress, setCommentIsLoading, clearFileProgress, setIsUploaded, setButtons, setSelectedBtn, setComment, setComments, setUpdatedComments } = slice.actions;
export const editLeadsReducer = slice.reducer;