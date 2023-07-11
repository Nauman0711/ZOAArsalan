import messaging from '@react-native-firebase/messaging';
import { showToast } from '../../../components/toastMessage/simpleToast';
import { notificationActions } from '../../../redux/notifications/action';
export const getNotifications = () => {
    messaging().onMessage(async remoteMessage => {
        showToast(remoteMessage?.notification?.body)
        notificationActions({ data: remoteMessage?.notification?.data })
    })
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
        notificationActions({ data: remoteMessage?.notification?.data })
      });
}