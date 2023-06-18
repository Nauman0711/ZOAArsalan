import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "profile",
    initialState: {
        userData: {}
    },
    reducers: {
        setUserData: ((state, action) => {
            state.userData = action.payload;
        }),
    },
});
export const { setUserData } = slice.actions;
export const profileReducer = slice.reducer;