import React, { useCallback } from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";
import { useSelector } from "react-redux";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from "../../../../theme/color";
import styles from "./styles";
import { navigate } from "../../../../routes/rootNavigation";
import { store } from "../../../../redux/store/store";
import { setIsShowModal } from "../../../../redux/leads/reducer";

const ModalView = ({ visible, onClose }) => {
    const { modalData } = useSelector((state) => state.leadsReducer);
    const handleNavigation = () => {
        navigate('Submissions', { ...modalData })
        store.dispatch(setIsShowModal(false))
    }
    return (
        <Modal onRequestClose={onClose} transparent={true} visible={visible}>
            <View style={styles.container}>
                <TouchableOpacity onPress={onClose} style={styles.restArea} />
                <View style={styles.contentContainer}>
                    <TouchableOpacity onPress={handleNavigation} style={styles.itemContainer}>
                        <Entypo size={18} name="eye" color={colors.fontBlack} />
                        <Text style={styles.title}>View Submissions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}>
                        <Entypo size={18} name="cross" color={colors.fontBlack} />
                        <Text style={styles.title}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}>
                        <Ionicons size={20} name="return-up-back" color={colors.fontBlack} />
                        <Text style={styles.title}>Postpone</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
export default ModalView