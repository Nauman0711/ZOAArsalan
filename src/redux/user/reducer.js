import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        userData: '',
    },
    reducers: {
        setUserData: ((state, action) => {
            state.userData = action.payload;
        }),
    },
});
export const { setUserData } = slice.actions;
export const userReducer = slice.reducer;