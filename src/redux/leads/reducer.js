import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "leads",
    initialState: {
        leadsData: [],
        error: '',
        isShowModal: false,
        modalData: {},
        isLoading: false
    },
    reducers: {
        setLeadsData: ((state, action) => {
            state.leadsData = action.payload;
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        setIsShowModal: ((state, action) => {
            state.isShowModal = action.payload;
        }),
        setModalData: ((state, action) => {
            state.modalData = action.payload;
        }),
        setErrorText: ((state, action) => {
            state.error = action.payload;
        }),
    },
});
export const { setLeadsData, setIsLoading, setErrorText, setIsShowModal, setModalData } = slice.actions;
export const leadsReducer = slice.reducer;