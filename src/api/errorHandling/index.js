import { showToast } from '../../components/toastMessage/simpleToast';
import crashlytics from '@react-native-firebase/crashlytics';
export const errorHandling = (response) => {
    crashlytics().recordError(response);
    if (response) {
        const { status, message } = response?.response || {}
        if (status == 401) {
            showToast('Authorization Error')
        } else {
            showToast(message)
        }
    }
};