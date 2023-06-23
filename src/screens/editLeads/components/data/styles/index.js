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
        flex:1
    },
    searchBarContainer: {
        backgroundColor: colors.searchBackgroundColor,
        height: 125,
        padding: 10,
        borderRadius: 10,
        marginVertical: 30,
        ...shadow
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 10,
        flex: 1
    },
    selectedBtn: {
        backgroundColor: colors.green
    },
    btnTitle: {
        color: colors.white
    },
    container: {
        flex: 1
    },
    textInputStyle: {
        // flex: 1
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 20,
        color: colors.headerBlackColor
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        justifyContent: 'center'
    },
    thumbnailImage: {
        height: 60,
        width: 60,
        borderRadius: 10
    },
    progressBar: {
        position: 'absolute'
    }
})
export default styles