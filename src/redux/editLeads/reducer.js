import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
    photosData: [],
    note: '',
    selectedFiles: [],
    isUploaded: false,
    files: [],
    buttons: ['Data', 'Comments'],
    comments: [],
    openImageIndex: 0,
    openImage: false,
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
        setOpenImageIndex: ((state, action) => {
            state.openImageIndex = action.payload;
        }),
        setOpenImage: ((state, action) => {
            state.openImage = action.payload;
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
        addSelectedFiles: ((state, action) => {
            state.selectedFiles = [...state.selectedFiles, ...action.payload];
        }),
        addFiles: ((state, action) => {
            state.files = [...state.files, ...action.payload];
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
        deleteFiles: ((state, action) => {
            state.files = state.files.filter(obj => obj.filename !== action.payload)
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
export const { setPhotosData, setIsLoading, setNotes, setFiles, setSelectedFiles, updateFileProgress, setCommentIsLoading, clearFileProgress, setIsUploaded, setButtons, setSelectedBtn, setComment, setComments, setUpdatedComments, setOpenImage, setOpenImageIndex, deleteFiles, addSelectedFiles, addFiles } = slice.actions;
export const editLeadsReducer = slice.reducer;