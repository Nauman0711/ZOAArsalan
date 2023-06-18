/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onMountUserProfile } from './src/redux/profile/action';
import Navigation from './src/routes/navigation';
import Leads from './src/screens/leads';



function App() {
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.userReducer);
  useEffect(() => {
    // dispatch({ type: 'userLogout' })
    onMountUserProfile()
  }, [userData?.token])
  return (
    <Navigation />
    // <Leads />
  );
}


export default App;