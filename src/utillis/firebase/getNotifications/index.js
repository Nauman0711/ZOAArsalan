import messaging from '@react-native-firebase/messaging';
import { showToast } from '../../../components/toastMessage/simpleToast';
import { notificationActions } from '../../../redux/notifications/action';
import { addNotificationCount } from '../../../redux/notifications/reducer';
import { store } from '../../../redux/store/store';
export const getNotifications = () => {
    messaging().onMessage(async remoteMessage => {
        showToast(remoteMessage?.notification?.body)
        store.dispatch(addNotificationCount())
        notificationActions({ data: remoteMessage?.notification?.data })
    })
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
        store.dispatch(addNotificationCount())
        notificationActions({ data: remoteMessage?.notification?.data })
    });
}