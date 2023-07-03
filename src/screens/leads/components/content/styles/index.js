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
        ...shadow
    },
    internalRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    internalColumContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    internalIconsColumContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    statusText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 500,
    },
    statusContainer: {
        backgroundColor: colors.yellow,
        padding: 8,
        borderRadius: 35
    },
    title: {
        fontSize: 12,
        fontWeight: 700,
        color: colors.titleGray,
        marginVertical: 5

    },
    descText: {
        color: colors.headerBlackColor,
        fontWeight: '500',
        fontSize: 14,
        marginVertical: 5
    }
})
export default styles