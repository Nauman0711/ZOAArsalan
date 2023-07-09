import axios from "axios";
import { Platform } from "react-native";
import { baseURL } from "../baseURL";
import { store } from "../../redux/store/store";

const createInstance = ({ headers, transformRequest, onUploadProgress }) => {
    const userData = store.getState().userReducer.userData;
    const authorizationHeader = headers?.Authorization || (userData?.token && `Bearer ${userData.token}`);
    return axios.create({
        baseURL,
        headers: { ...headers, Authorization: authorizationHeader, platform: Platform.OS },
        ...transformRequest,
        ...onUploadProgress
    });
};

export const instance = () => createInstance({});

export const instanceWithoutHeader = () => axios.create({
    baseURL,
});

export const instanceFormData = ({ onUploadProgress }) => createInstance({
    headers: {
        "Content-type": "multipart/form-data",
        // x_client_type: Platform.OS
    },
    transformRequest: { transformRequest: (data) => { return data } },
    onUploadProgress: { onUploadProgress }
});