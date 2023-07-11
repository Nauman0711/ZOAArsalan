import { StyleSheet } from "react-native";
import colors from "../../../../../theme/color";
const shadow = {
    shadowColor: "#B0B0B0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 35,
        marginBottom: 20,
        alignItems: 'center',
        ...shadow
    },
    internalContainer: {
        flex: 1
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.fontBlack
    },
    content: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.fontGray
    },
    time: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.fontGray
    }
})
export default styles