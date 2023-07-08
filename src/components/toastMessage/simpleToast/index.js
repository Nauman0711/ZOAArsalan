import { ToastAndroid } from 'react-native';
export const showToast = (response) => {
    if (response) {
        const { status, message } = response?.response || {}
        if (status == 401) {
            ToastAndroid.show('Authorization Error', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        }
    }
};