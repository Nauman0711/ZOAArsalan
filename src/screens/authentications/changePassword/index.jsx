import React from "react";
import { View } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import GenericFormInput from "../../../components/formInput/genericFormInput";
import ScreenContainer from "../../../components/screenContainer";
import BtnGreen from "../../../components/buttons/btnGreen";
import { setCPassword, setErrorText, setNewPassword, setOldPassword } from "../../../redux/authentication/createPassword/reducer";
import styles from "./styles";
import { shouldDisabled } from "../../../redux/authentication/createPassword/action";

const ChangePassword = ({ navigation }) => {
    const dispatch = useDispatch()
    const { oldPassword, newPassword, cPassword, error, isLoading } = useSelector((state) => state.createPasswordReducer);
    return (
        <ScreenContainer>
            <GenericFormInput
                title="Old Password"
                onChangeText={(e) => { dispatch(setErrorText('')), dispatch(setOldPassword(e)) }}
                placeholder="Old Password"
                value={oldPassword}
            />
            <GenericFormInput
                title="New Password"
                onChangeText={(e) => { dispatch(setErrorText('')), dispatch(setNewPassword(e)) }}
                placeholder="New Password"
                value={newPassword}
            />
            <GenericFormInput
                title="Confirm Password"
                onChangeText={(e) => { dispatch(setErrorText('')), dispatch(setCPassword(e)) }}
                placeholder="Confirm Password"
                value={cPassword}
            />
            <BtnGreen style={styles.btnStyle} disabled = {shouldDisabled()} onPress={() => navigation.navigate('SuccessfullyUpdated')} title={"Submit"} />

        </ScreenContainer>
    )
}
export default ChangePassword