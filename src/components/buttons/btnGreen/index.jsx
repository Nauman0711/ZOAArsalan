import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import colors from "../../../theme/color";
import styles from "./styles";

const BtnGreen = ({ title, style, onPress, disabled, titleStyle, isLoading }) => {
    const isEnabled = () => {
        if (disabled) {
            return true
        } else {
            return false
        }
    }
    return (
        <TouchableOpacity activeOpacity={0.8} disabled={!disabled || isLoading} onPress={onPress} style={[styles.container, style, isEnabled() && styles.enableBtn]}>
            {isLoading ?
                <ActivityIndicator animating={true} color={colors.white} />
                :
                <Text style={[styles.title, isEnabled() && styles.enableTitle, titleStyle]}>{title}</Text>
            }
        </TouchableOpacity>
    )
}
export default BtnGreen