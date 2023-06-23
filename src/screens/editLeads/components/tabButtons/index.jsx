import React, { useEffect } from "react";
import { FlatList, TextInput, View, Text, Image, Keyboard, TouchableOpacity } from "react-native";
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
                    <Text style={[item === selectedBtn && styles.title]}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
export default TabButtons