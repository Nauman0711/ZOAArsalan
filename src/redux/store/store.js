import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { blacklist, whitelist } from "./constant";
import { userReducer } from '../user/reducer';
import { loginReducer } from '../authentication/login/reducer';
import { leadsReducer } from '../leads/reducer';
import { editLeadsReducer } from '../editLeads/reducer';
import { createPasswordReducer } from '../authentication/createPassword/reducer';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist,
    blacklist,
}
const appReducer = combineReducers({
    userReducer,
    loginReducer,
    leadsReducer,
    editLeadsReducer,
    createPasswordReducer
})
const rootReducer = (state, action) => {
    if (action.type === 'userLogout') {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export const persistor = persistStore(store)