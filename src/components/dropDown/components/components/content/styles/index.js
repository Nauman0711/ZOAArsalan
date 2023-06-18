import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../../../theme/color";

const { height } = Dimensions.get('screen')
const styles = StyleSheet.create({

    activityIndicatorContainer: {
        justifyContent: "center",
        height: height / 4.2
    },
    selectableBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10
    },
    pressedBtn: {
        opacity: 0.6
    },
    listDisableText: {
        color: colors.contentGray,
        fontSize: 14,
    },
    listText: {
        color: colors.contentGray,
        fontSize: 14,
        marginLeft: 15,
    }
})
export default styles