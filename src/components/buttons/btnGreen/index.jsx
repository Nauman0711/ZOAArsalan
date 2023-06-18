import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const BtnGreen = ({ title, style, onPress, disabled, titleStyle }) => {
    const isEnabled = () => {
        if (disabled) {
            return true
        } else {
            return false
        }
    }
    return (
        <TouchableOpacity activeOpacity={0.8} disabled={!disabled} onPress={onPress} style={[styles.container, style, isEnabled() && styles.enableBtn]}>
            <Text style={[styles.title, isEnabled() && styles.enableTitle, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default BtnGreen