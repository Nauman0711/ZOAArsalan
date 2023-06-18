import axios from "axios";
import { baseURL } from "../baseURL";
import { store } from "../../redux/store/store";

const createInstance = ({ headers, transformRequest }) => {
    const userData = store.getState().userReducer.userData;
    const authorizationHeader = headers?.Authorization || (userData?.token && `Bearer ${userData.token}`);
    return axios.create({
        baseURL,
        headers: authorizationHeader ? { ...headers, Authorization: authorizationHeader } : headers,
        ...transformRequest
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

export const instanceFormData = () => createInstance({
    headers: {
        "Content-type": "multipart/form-data",
    },
    transformRequest: { transformRequest: (data) => { return data } }
});