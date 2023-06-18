import { store } from "../../redux/store/store";
import * as RootNavigation from '../../routes/rootNavigation';

export const splashAction = async () => {
    const navigation = RootNavigation
    setTimeout(() => {
        const { userData } = store.getState().userReducer
        if (userData) {
            // navigation.replace('Leads')
            navigation.replace('Tabs')
            // navigation.replace('DrawerNavigation')
        } else {
            navigation.replace('Login')
        }
    }, 2500);
}