/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PermissionsAndroid } from 'react-native';
import { onMountUserProfile } from './src/redux/profile/action';
import Navigation from './src/routes/navigation';
import { getNotifications } from './src/utillis/firebase/getNotifications';
import LeadsManagement from './src/screens/leadsManagement';

function App() {
  const { userData } = useSelector((state) => state.userReducer);
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    onMountUserProfile()
  }, [userData?.token])
  useEffect(() => {
    const unsubscribe = getNotifications()
    return unsubscribe;
  }, []);
  return (
    <Navigation />
  );
}


export default App;