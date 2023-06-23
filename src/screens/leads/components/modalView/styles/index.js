import { StyleSheet } from "react-native";
import colors from "../../../../../theme/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(225,225,225,0.7)"
    },
    restArea: {
        flex:5
    },
    contentContainer: {
        backgroundColor: colors.white,
        padding: 15,
        // flex:1
        paddingVertical: 30,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    title: {
        color: colors.fontGray,
        fontWeight: '500',
        fontSize: 16,
        marginHorizontal: 15
    }
})
export default styles