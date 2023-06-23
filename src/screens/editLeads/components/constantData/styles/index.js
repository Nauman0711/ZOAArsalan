import { StyleSheet } from "react-native";
import colors from "../../../../../theme/color";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    style: {
        margin: 10
    },
    thumbnailImage: {
        height: 60,
        width: 60,
        borderRadius: 10,
    },
    itemSeprator: {
        margin: 5
    },
    noteTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.fontBlack
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.fontGray
    }
})
export default styles