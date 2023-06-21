import axios from "axios";
import { baseURL } from "../baseURL";
import { store } from "../../redux/store/store";

const createInstance = ({ headers, transformRequest, onUploadProgress }) => {
    const userData = store.getState().userReducer.userData;
    const authorizationHeader = headers?.Authorization || (userData?.token && `Bearer ${userData.token}`);
    return axios.create({
        baseURL,
        headers: authorizationHeader ? { ...headers, Authorization: authorizationHeader } : headers,
        ...transformRequest,
        ...onUploadProgress
    });
};

export const instance = () => createInstance({});

export const instanceForForgetPassword = () => createInstance({
    headers: {
        Authorization: "Bearer " + store.getState().otpReducer.token,
    }
});

export const instanceWithoutHeader = () => axios.create({
    baseURL,
});

export const instanceFormData = ({ onUploadProgress }) => createInstance({
    headers: {
        "Content-type": "multipart/form-data",
    },
    transformRequest: { transformRequest: (data) => { return data } },
    onUploadProgress: { onUploadProgress }
});