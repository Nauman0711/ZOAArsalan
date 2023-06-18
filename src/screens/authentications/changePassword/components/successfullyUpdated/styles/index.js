import { StyleSheet } from "react-native";
import colors from "../../../../../../theme/color";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: colors.fontBlack,
        fontWeight: '700',
        fontSize: 24,
        marginTop: 10,
    },
    description: {
        color: colors.fontGray,
        marginTop: 5,
        fontWeight: '500',
        fontSize: 14
    },
    btnStyle: {
        marginTop: 20,
        paddingHorizontal: 30
    },
    titleStyle: {
        fontSize: 15
    }
})
export default styles