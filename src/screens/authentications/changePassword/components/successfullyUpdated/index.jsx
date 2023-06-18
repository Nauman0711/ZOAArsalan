import React from "react";
import { View, Text } from "react-native";
import { SuccessUpdatedPasswordIcon } from "../../../../../assets/images/svg";
import BtnGreen from "../../../../../components/buttons/btnGreen";
import ScreenContainer from "../../../../../components/screenContainer";
import styles from "./styles";

const SuccessfullyUpdated = () => {
    return (
        <ScreenContainer>
            <View style={styles.container}>
                <SuccessUpdatedPasswordIcon />
                <Text style={styles.title}>Password Changed!</Text>
                <Text style={styles.description}>Your password has been changed successfully.</Text>
                <BtnGreen titleStyle = {styles.titleStyle} style={styles.btnStyle} disabled = {true} onPress={() => navigation.navigate('Login')} title={"Back to Login"} />
            </View>
        </ScreenContainer>
    )
}
export default SuccessfullyUpdated