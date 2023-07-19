import { StyleSheet } from "react-native";
import colors from "../../../../../theme/color";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.contentBackgroundColor,
        padding: 12,
        borderRadius: 4
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 4
    },
    nameTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: colors.fontBlack,
        fontWeight: '400'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        flex: 1
    },
    nameSubContainer: {
        flex: 1
    },
    description: {
        marginLeft: 10,
        fontSize: 12,
        color: colors.fontGray,
        fontWeight: '300',
        flex:1
    },
    timeText: {
        textAlign: 'center',
        fontSize: 12,
        color: colors.fontGray,
        flex:1
    },
    itemView: {
        color: colors.blue,
        fontWeight: '400',
        fontSize: 14
    },
})
export default styles