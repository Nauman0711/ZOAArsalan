import { StyleSheet } from "react-native";
import colors from "../../../../theme/color";

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal: 15
    },
    keyboardAvoidView: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 20
    },
    loginTxt: {
        fontSize: 32,
        fontWeight: '400',
        color: colors.white,
        // fontFamily: 'Komika Axis'
    },
    btnStyle: {
        marginTop: 40
    }
})
export default styles