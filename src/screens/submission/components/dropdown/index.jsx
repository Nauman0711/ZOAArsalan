import React, { memo, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import NameContainer from "../../../../components/nameContainer";
import { dateFuction } from "../../../../redux/leads/action";
import { navigate } from "../../../../routes/rootNavigation";
import styles from "./styles";

const DropDownSubmission = (props) => {
    const { note, user, createdAt } = props
    const handleNavigation = useCallback(() => {
        navigate('EditLeads', { ...props, view: true })
    }, [])
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={handleNavigation} style={styles.container}>
            <View activeOpacity={0.8} style={styles.titleContainer}>
                <NameContainer name={user.username} />
                <View style={styles.nameContainer}>
                    <View>
                        <Text style={styles.nameTitle}>{user.username}</Text>
                        <Text style={styles.description}>{note}</Text>
                    </View>
                    <Text style={styles.timeText}>{dateFuction(createdAt)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default memo(DropDownSubmission)