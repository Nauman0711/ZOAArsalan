import { StyleSheet } from "react-native";
import colors from "../../../theme/color";

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.contentBackgroundColor,
        padding: 10,
        borderRadius: 4
    },
    container: {
        padding: 10,
        borderRadius: 100,
        backgroundColor: colors.green,
    },
    title: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 14
    }
})
export default styles