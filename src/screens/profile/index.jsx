import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from "react-redux";
import ScreenContainer from "../../components/screenContainer";
import { ChangePasswordIcon, LogOutIcon } from "../../assets/images/svg";
import { logout } from "../../redux/user/action";
import styles from "./styles";

const Profile = ({ navigation }) => {
    const { name, email } = useSelector((state) => state.userReducer?.userData?.data);
    return (
        <ScreenContainer>
            <View style={styles.nameContainer}>
                <Text style={styles.shortName}>{name.substring(0, 2).toUpperCase()}</Text>
            </View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.emailText}>{email}</Text>
            <View style={styles.boxContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')} style={styles.rowContainer}>
                    <ChangePasswordIcon />
                    <Text style={styles.headingTitle}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={logout} style={styles.rowContainer}>
                    <LogOutIcon />
                    <Text style={styles.headingTitle}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    )
}
export default Profile