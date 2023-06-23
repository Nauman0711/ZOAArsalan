import { StyleSheet } from "react-native";
import colors from "../../../../../../../theme/color";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameContainer: {
        marginHorizontal: 10,
    },
    name: {
        fontWeight: '500',
        color: colors.fontBlack,
        fontSize: 15,
    },
    time: {
        fontWeight: '400',
        color: colors.fontGray,
        fontSize: 12,
    },
    description: {
        fontWeight: '400',
        color: colors.fontBlack,
        fontSize: 12
    }
})
export default styles