import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../rootNavigation';
import SplashScreen from '../../screens/splash';
import Login from '../../screens/authentications/login';
import Leads from '../../screens/leads';
import EditLeads from '../../screens/editLeads';
import Tabs from '../bottomNavigation';
import ChangePassword from '../../screens/authentications/changePassword';
import SuccessfullyUpdated from '../../screens/authentications/changePassword/components/successfullyUpdated';
import colors from '../../theme/color';
import Submissions from '../../screens/submission';

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen options={{ headerShown: false }} name={"Splash"} component={SplashScreen} />
                <Stack.Screen options={{ headerShown: false }} name={"Login"} component={Login} />
                <Stack.Screen options={{ headerTitle: '', headerBackTitle: 'Change Password?', headerTintColor: colors.fontBlack }} name={"ChangePassword"} component={ChangePassword} />
                <Stack.Screen options={{ headerShown: false }} name={"Tabs"} component={Tabs} />
                <Stack.Screen options={{ headerShown: false }} name={"SuccessfullyUpdated"} component={SuccessfullyUpdated} />
                <Stack.Screen options={{ headerTitle: '', headerShadowVisible: false, headerTintColor: colors.fontBlack }} name={"EditLeads"} component={EditLeads} />
                <Stack.Screen options={{ headerTitle: '', headerShadowVisible: false, headerTintColor: colors.fontBlack }} name={"Submissions"} component={Submissions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation