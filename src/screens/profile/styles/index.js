import { StyleSheet } from "react-native";
import colors from "../../../theme/color";

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: colors.purpleColor,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
        width: 36,
        borderRadius: 100,
        marginVertical: 10
    },
    shortName: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '500'
    },
    nameText: {
        color: colors.black,
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center'
    },
    emailText: {
        color: colors.fontBlack,
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 3
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    headingTitle: {
        marginLeft: 10,
        color: colors.black,
        fontSize: 14,
        fontWeight: '400'
    },
    boxContainer: {
        backgroundColor: colors.whiteOpacity,
        padding: 20,
        borderRadius: 10,
        marginVertical: 20
    }
})
export default styles