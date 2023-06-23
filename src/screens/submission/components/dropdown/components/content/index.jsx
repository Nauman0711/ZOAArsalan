import React, { memo } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Content = () => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>Submitted 2 videos, 1 image on </Text>
            <Text onPress={() => { }} style={styles.itemView}>View</Text>
        </View>
    )
}
export default memo(Content)