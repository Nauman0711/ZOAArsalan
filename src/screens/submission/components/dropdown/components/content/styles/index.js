import { StyleSheet } from "react-native";
import colors from "../../../../../../../theme/color";

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        margin: 2,
        marginTop: 5
    },
    itemTitle: {
        flex: 1,
        color: colors.fontGray,
        fontWeight: '400',
        fontSize: 12
    },
    itemView: {
        color: colors.blue,
        fontWeight: '400',
        fontSize: 12
    },
})
export default styles