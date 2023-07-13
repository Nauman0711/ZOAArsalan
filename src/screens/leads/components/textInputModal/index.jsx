import React, { useCallback } from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import GenericFormInput from "../../../../components/formInput/genericFormInput";
import { shouldEnableReason, onSubmitLeadStatus } from "../../../../redux/leads/action";
import styles from "./styles";
import { setReason, setStatus } from "../../../../redux/leads/reducer";
import BtnGreen from "../../../../components/buttons/btnGreen";

const ModalViewInput = ({ visible, onClose }) => {
    const dispatch = useDispatch()
    const { reason, status, isLoadingLeadsStatus } = useSelector((state) => state.leadsReducer);
    const handleClose = () => {
        onClose()
        dispatch(setReason(''))
        dispatch(setStatus(''))
    }
    return (
        <Modal onRequestClose={handleClose} transparent={true} visible={visible}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleClose} style={styles.restArea} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{status === "POSTPONED" ? "Postpone" : "Cancel"}</Text>
                    <GenericFormInput
                        title="Give Reason"
                        onChangeText={(e) => dispatch(setReason(e))}
                        value={reason}
                    />
                    <BtnGreen isLoading={isLoadingLeadsStatus} onPress={onSubmitLeadStatus} disabled={shouldEnableReason()} style={{ marginTop: 20 }} title={"Submit"} />
                </View>
                <TouchableOpacity onPress={handleClose} style={styles.restArea} />
            </View>
        </Modal>
    )
}
export default ModalViewInput