import React, { useCallback, memo } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { EditIcon } from "../../../../assets/images/svg";
import { dateFuction } from "../../../../redux/leads/action";
import { setIsShowModal, setModalData } from "../../../../redux/leads/reducer";
import { navigate } from "../../../../routes/rootNavigation";
import styles from "./styles";

const Content = (props) => {
    const dispatch = useDispatch()
    const { code, status, leadType, surveyDate } = props
    const handleClick = useCallback(() => {
        navigate('EditLeads', props)
    }, [])
    const handleLongPress = useCallback(() => {
        dispatch(setModalData(props))
        dispatch(setIsShowModal(true))
    }, [props])
    return (
        <TouchableOpacity activeOpacity={0.8} onLongPress={handleLongPress} style={styles.container}>
            <View style={styles.internalColumContainer}>
                <Text style={styles.title}>Booking Reference</Text>
                <Text style={styles.title}>Lead Name</Text>
                <Text style={styles.title}>Date</Text>
            </View>
            <View style={styles.internalColumContainer}>
                <Text style={styles.descText}>{code}</Text>
                <Text style={styles.descText}>{leadType}</Text>
                <Text style={styles.descText}>{dateFuction(surveyDate)}</Text>
            </View>
            <View style={styles.internalIconsColumContainer}>
                <EditIcon onPress={handleClick} />
                <View />
                <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default memo(Content)