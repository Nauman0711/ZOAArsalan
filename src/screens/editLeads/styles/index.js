import { StyleSheet } from "react-native";
import colors from "../../../theme/color";

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
    searchBarContainer: {
        backgroundColor: colors.searchBackgroundColor,
        height: 125,
        padding: 10,
        borderRadius: 10,
        marginVertical: 30,
        ...shadow
    },
    textInputStyle: {
        // flex: 1
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 20,
        color: colors.headerBlackColor
    }
})
export default styles