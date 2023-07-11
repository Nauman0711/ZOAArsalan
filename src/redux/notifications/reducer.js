import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "notifications",
    initialState: {
        notifications: [],
        refreshing: false,
        currentPage: '',
        totalPages: '',
        isLoading: false

    },
    reducers: {
        setNotifications: ((state, action) => {
            state.notifications = action.payload;
        }),
        addNotifications: ((state, action) => {
            state.notifications = [...state.notifications, ...action.payload];
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        setCurrentPage: ((state, action) => {
            state.currentPage = action.payload;
        }),
        setTotalPages: ((state, action) => {
            state.totalPages = action.payload;
        }),
        setRefreshing: ((state, action) => {
            state.refreshing = action.payload;
        }),
    },
});
export const { setNotifications, setCurrentPage, setIsLoading, setRefreshing, setTotalPages, addNotifications } = slice.actions;
export const notificationsReducer = slice.reducer;