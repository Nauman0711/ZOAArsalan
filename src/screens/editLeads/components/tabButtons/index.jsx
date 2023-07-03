import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBtn } from "../../../../redux/editLeads/reducer";
import styles from "./styles";

const TabButtons = ({ }) => {
    const dispatch = useDispatch()
    const { buttons, selectedBtn } = useSelector((state) => state.editLeadsReducer);

    return (
        <View style={styles.btnContainer}>
            {buttons.map((item) => (
                <TouchableOpacity onPress={() => dispatch(setSelectedBtn(item))} key={item} style={[styles.itemStyle, item == selectedBtn && styles.selectedBtn]}>
                    <Text style={[styles.title, item === selectedBtn && styles.selectedTitle]}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
export default TabButtons