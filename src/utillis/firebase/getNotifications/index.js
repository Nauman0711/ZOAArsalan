import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
export const getNotifications = () => {
    messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    })
}