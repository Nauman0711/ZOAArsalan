import { StyleSheet } from "react-native";
import colors from "../../../../theme/color";
const styles = StyleSheet.create({
    titleTxt: {
        color: colors.white,
        fontWeight: '500',
        // fontFamily: 'Urbanist-regular',
        fontSize: 16,
    },
    titleHasValue: {
        color: colors.yellow
    },
    innerContainer: {
        marginTop: 7,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.borderGray,
        paddingHorizontal: 10,
    },
    inlineOptionContainer: {
        marginTop: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inlineItemContainer: {
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        borderColor: colors.borderGray,
    },
    selectedInlineItemContainer: {
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        backgroundColor: colors.yellow
    },
    inlineTitle: {
        color: colors.fontGray,
        fontWeight: '500',
        // fontFamily: 'Urbanist-regular',
        fontSize: 14,
        paddingVertical: 12,
        marginLeft: 3
    },
    selectedInlineItemText: {
        color: colors.black
    },
    placeholderTextColor: {
        color: colors.fontGray
    },
    forgetTxt: {
        color: colors.yellow,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 5,
        alignSelf: 'flex-end'
    }
})
export default styles