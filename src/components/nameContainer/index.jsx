import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const NameContainer = ({name}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name.substring(0, 2).toUpperCase()}</Text>
        </View>
    )
}
export default NameContainer