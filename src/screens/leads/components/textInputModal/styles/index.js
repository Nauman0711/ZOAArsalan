import { StyleSheet } from "react-native";
import colors from "../../../../../theme/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(225,225,225,0.7)"
    },
    restArea: {
        flex: 5
    },
    contentContainer: {
        backgroundColor: colors.white,
        padding: 15,
    },
    title: {
        color: colors.fontGray,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})
export default styles