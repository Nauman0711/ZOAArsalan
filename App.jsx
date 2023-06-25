/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { onMountUserProfile } from './src/redux/profile/action';
import Navigation from './src/routes/navigation';

function App() {
  const { userData } = useSelector((state) => state.userReducer);
  useEffect(() => {
    onMountUserProfile()
  }, [userData?.token])
  return (
    <Navigation />
  );
}


export default App;