import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import colors from "../../../../../theme/color";
import styles from "./styles";

const ListEmptyComponent = ({ loading }) => {
    return (
        <View style={styles.activityIndicatorContainer}>
            {loading ?
                <ActivityIndicator size={'small'} color={colors.red} animating={loading} />
                :
                <Text style={styles.noDataTitle}>No Data</Text>
            }
        </View>
    )
}
export default ListEmptyComponent