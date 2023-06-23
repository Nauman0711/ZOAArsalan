import { store } from "../../store/store";
import { resetPasswordApi } from "../../../api/endPoints/authentication/authenticationController";
import { navigate } from "../../../routes/rootNavigation";

export const onSubmit = async () => {
    const { oldPassword, newPassword, confirmPassword } = store.getState().createPasswordReducer
    const body = {
        oldPassword,
        newPassword,
        confirmPassword
    }
    const response = await resetPasswordApi({ body })
    if (response !== "Error") {
        navigate('SuccessfullyUpdated')
    }
}
export const shouldDisabled = () => {
    const { oldPassword, newPassword, confirmPassword } = store.getState().createPasswordReducer
    if (oldPassword && newPassword && confirmPassword) {
        return true
    } else {
        return false
    }
}