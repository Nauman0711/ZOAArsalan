import React from "react";
import { Text, View } from "react-native";
import NameContainer from "../../../../../../components/nameContainer";
import { dateFuction } from "../../../../../../redux/leads/action";
import styles from "./styles";

const Content = ({ user, comment, createdAt }) => {
    return (
        <View style={styles.container}>
            <NameContainer name={user.username} />
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{user.username}  <Text style={styles.time}>{dateFuction(createdAt)}</Text> </Text>
                <Text style={styles.description}>{comment}</Text>
            </View>
        </View>
    )
}
export default Content