import { StyleSheet } from "react-native";
import colors from "../../../../../../theme/color";
const styles = StyleSheet.create({

    footerContainer: {
        padding: 5,
        borderColor: colors.transparent,
        borderTopColor: colors.borderGray,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    footerTexts: {
        color: colors.white,
        fontSize: 14,
        padding: 5,
    },
})
export default styles