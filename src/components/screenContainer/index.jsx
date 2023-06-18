import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";

const ScreenContainer = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.secondContainer}>
                {children}
            </View>
        </SafeAreaView>
    )
}
export default ScreenContainer