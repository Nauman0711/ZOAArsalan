import { StyleSheet } from "react-native";
import colors from "../../../theme/color";

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.searchBackgroundColor,
        height: 50,
        paddingHorizontal: 10,
        marginTop:20,
        borderRadius: 32
    },
    textInputStyle: {
        flex: 1,
        color: colors.fontBlack
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 20,
        color: colors.headerBlackColor
    }
})
export default styles