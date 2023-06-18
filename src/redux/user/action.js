import { Alert } from "react-native"
import { store } from "../store/store"
import { replace } from "../../routes/rootNavigation"
export const logout = ({ }) => {
    Alert.alert(
        'Logout',
        "Are you sure to Logout",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: "OK", onPress: () => {
                    replace('Login')
                    store.dispatch({ type: 'userLogout' })
                }
            }
        ]
    )
}