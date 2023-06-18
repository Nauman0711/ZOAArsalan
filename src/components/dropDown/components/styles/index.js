import { StyleSheet } from "react-native";
import colors from "../../../../theme/color";
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    mainContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center'
    },
    internalContainer: {
        backgroundColor: colors.black,
        borderWidth: 1,
        borderColor: colors.borderGray,
        marginHorizontal: 20,
        borderRadius: 5,
        height: '40%'
    },
    contentContainerStyle: {
        justifyContent: 'space-between'
    },
})
export default styles