import { StyleSheet } from "react-native";
import colors from "../../../../../theme/color";

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 10,
        flex: 1
    },
    selectedBtn: {
        backgroundColor: colors.green
    },
    selectedTitle: {
        color: colors.white
    },
    title: {
        color: colors.fontBlack
    },
})
export default styles