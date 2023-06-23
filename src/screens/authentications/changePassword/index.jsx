import React from "react";
import { useSelector, useDispatch } from "react-redux";
import GenericFormInput from "../../../components/formInput/genericFormInput";
import ScreenContainer from "../../../components/screenContainer";
import BtnGreen from "../../../components/buttons/btnGreen";
import { setCPassword, setErrorText, setNewPassword, setOldPassword } from "../../../redux/authentication/createPassword/reducer";
import styles from "./styles";
import { onSubmit, shouldDisabled } from "../../../redux/authentication/createPassword/action";
import ActivityLoader from "../../../components/loader/activityLoader";

const ChangePassword = ({ }) => {
    const dispatch = useDispatch()
    const { oldPassword, newPassword, confirmPassword, error, isLoading } = useSelector((state) => state.createPasswordReducer);
    return (
        <ScreenContainer>
            <ActivityLoader animating={isLoading} />
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
                value={confirmPassword}
            />
            <BtnGreen style={styles.btnStyle} disabled={shouldDisabled()} onPress={onSubmit} title={"Submit"} />

        </ScreenContainer>
    )
}
export default ChangePassword