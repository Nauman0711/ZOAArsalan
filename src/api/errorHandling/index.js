import { showToast } from '../../components/toastMessage/simpleToast';
export const errorHandling = (response) => {
    if (response) {
        const { status, message } = response?.response || {}
        if (status == 401) {
            showToast('Authorization Error')
        } else {
            showToast(message)
        }
    }
};