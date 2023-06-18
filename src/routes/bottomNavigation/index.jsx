import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Leads from '../../screens/leads';
import Profile from '../../screens/profile';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Leads} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
export default Tabs