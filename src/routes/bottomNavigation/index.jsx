import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Leads from '../../screens/leads';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Profile from '../../screens/profile';
import colors from '../../theme/color';
import Notifications from '../../screens/notifications';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: false,  tabBarIcon: ({ focused }) => <Entypo size={28} name="home" color={focused ? colors.green : colors.fontBlack} />, tabBarActiveTintColor: colors.green, tabBarInactiveTintColor: colors.fontBlack}} name="Home" component={Leads} />
            <Tab.Screen options={{headerShown: false,  tabBarIcon: ({ focused }) => <Ionicons size={28} name="person-sharp" color={focused ? colors.green : colors.fontBlack} />, tabBarActiveTintColor: colors.green, tabBarInactiveTintColor: colors.fontBlack}} name="Profile" component={Profile} />
            <Tab.Screen options={{headerShown: false,  tabBarIcon: ({ focused }) => <FontAwesome size={24} name="bell" color={focused ? colors.green : colors.fontBlack} />, tabBarActiveTintColor: colors.green, tabBarInactiveTintColor: colors.fontBlack}} name="Notifications" component={Notifications} />
        </Tab.Navigator>
    );
}
export default Tabs