import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../../../theme/color";
const { height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        justifyContent: "center",
        height: height / 4.2
    },
    noDataTitle: {
        color: colors.contentGray,
        fontSize: 14,
        textAlign: 'center',
    }
})
export default styles