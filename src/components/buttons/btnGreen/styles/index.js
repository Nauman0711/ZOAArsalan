import { StyleSheet } from "react-native";
import colors from "../../../../theme/color";
const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        backgroundColor: colors.contentGray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    enableBtn: {
        backgroundColor: colors.green
    },
    title: {
        // fontFamily: 'Urbanist',
        color: colors.fontGray,
        fontWeight: '600',
        fontSize: 18,
    },
    enableTitle: {
        color: colors.white
    }
})
export default styles