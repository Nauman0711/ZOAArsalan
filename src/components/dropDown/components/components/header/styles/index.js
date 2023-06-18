import { StyleSheet } from "react-native";
import colors from "../../../../../../theme/color";
const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        backgroundColor: colors.black,
        borderColor: colors.borderGray,
        borderWidth:1,
        borderTopColor: colors.transparent,
        borderLeftColor: colors.transparent,
        borderRightColor: colors.transparent,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    titleText: {
        color: colors.white,
        fontSize: 14,
    },
    searchableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        backgroundColor: colors.white,
        borderColor: colors.contentGray,
        borderWidth: 0.5,
        margin: 15,
        padding: 8,
        borderRadius: 4
    },
    searchText: {
        flex: 1,
        marginLeft: 3,
        height: 50,
        color: colors.black
    }
})
export default styles