import { StyleSheet } from "react-native";
import colors from "../../../../theme/color";
const styles = StyleSheet.create({
    titleTxt: {
        color: colors.fontGray,
        fontWeight: '500',
        // fontFamily: 'Urbanist-regular',
        fontSize: 15,
    },
    titleHasValue: {
        color: colors.green,
    },
    innerContainer: {
        marginTop: 7,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: colors.borderGray,
        backgroundColor: colors.inputFieldBackgroundAshWhite,
        paddingHorizontal: 10
    },
    forgetTxt: {
        color: colors.green,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 5,
        alignSelf: 'flex-end'
    },
    errorText: {
        color: colors.red,
        fontWeight: '500',
        // fontFamily: 'Urbanist-regular',
        fontSize: 13,
        marginTop: 4
    }
})
export default styles