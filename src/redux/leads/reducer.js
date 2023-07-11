import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
const slice = createSlice({
    name: "leads",
    initialState: {
        leadsData: [],
        error: '',
        refreshing: false,
        isShowModal: false,
        currentPage: '',
        totalPages: '',
        modalData: {},
        isLoading: false
    },
    reducers: {
        setLeadsData: ((state, action) => {
            state.leadsData = action.payload;
        }),
        addLeadsData: ((state, action) => {
            state.leadsData = [...state.leadsData, ...action.payload];
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        setIsShowModal: ((state, action) => {
            state.isShowModal = action.payload;
        }),
        setCurrentPage: ((state, action) => {
            state.currentPage = action.payload;
        }),
        setTotalPages: ((state, action) => {
            state.totalPages = action.payload;
        }),
        setModalData: ((state, action) => {
            state.modalData = action.payload;
        }),
        setRefreshing: ((state, action) => {
            state.refreshing = action.payload;
        }),
        setErrorText: ((state, action) => {
            state.error = action.payload;
        }),
    },
});
export const { setLeadsData, setIsLoading, setErrorText, setIsShowModal, setModalData, setCurrentPage, setTotalPages, setRefreshing, addLeadsData } = slice.actions;
export const leadsReducer = slice.reducer;