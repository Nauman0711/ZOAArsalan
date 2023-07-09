import messaging from '@react-native-firebase/messaging';
const getFcmToken = async () => {
    const token = await messaging().getToken()
    return token
}
export default getFcmToken