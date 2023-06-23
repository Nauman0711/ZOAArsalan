import { StyleSheet } from "react-native";
import colors from "../../../../../theme/color";
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    seprator: {
        margin: 8
    },
    inputContainer: {
        borderRadius: 30,
        borderColor: colors.contentGray,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    textInput: {
        flex:1
    },
    keyboardAvoidView: {
        // flex: 1,
        // justifyContent: 'flex-end'
    }
})
export default styles