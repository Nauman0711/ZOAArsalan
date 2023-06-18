import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { EditIcon } from "../../../../assets/images/svg";
import { dateFuction } from "../../../../redux/leads/action";
import { navigate } from "../../../../routes/rootNavigation";
import styles from "./styles";

const Content = (props) => {
    const { code, status, leadType, surveyDate } = props
    const handleClick = useCallback(() => {
        navigate('EditLeads', props)
    }, [])
    return (
        <View style={styles.container}>
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
            {/* <View style={styles.internalRowContainer}>
                <Text style={styles.title}>Booking Reference</Text>
                <Text style = {styles.descText}>{code}</Text>
                <EditIcon  />
            </View>
            <View style={styles.internalRowContainer}>
                <Text style={styles.title}>Lead Name</Text>
                <Text style = {styles.descText}>{leadType}</Text>
                <Text style = {styles.descText} />
            </View>
            <View style={styles.internalRowContainer}>
                <Text style={styles.title}>Date</Text>
                <Text style = {styles.descText}>{code}</Text>
                <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
            </View> */}
        </View>
    )
}
export default Content