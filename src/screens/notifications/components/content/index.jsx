import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { dateFuction } from "../../../../redux/leads/action";
import { notificationActions } from "../../../../redux/notifications/action";
import styles from "./styles";
const Content = (props) => {
    const { content, user, createdAt } = props
    const handleNotification = useCallback(() => {
        notificationActions(props)
    }, [props])
    return (
        <TouchableOpacity onPress={handleNotification} style={styles.container}>
            <View style={styles.internalContainer}>
                {user &&
                    <Text style={styles.title}>{user?.name}</Text>
                }
                <Text style={styles.title}>Nauman</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
            <Text style={styles.time}>{dateFuction(createdAt)}</Text>

        </TouchableOpacity>
    )
}
export default Content