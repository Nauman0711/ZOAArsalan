import { CommonActions, StackActions, NavigationAction } from '@react-navigation/native';
import { store } from "../../store/store";
import { loginApi } from "../../../api/endPoints/authentication/authenticationController";
import { setUserData } from "../../user/reducer";
import { setErrorText, setIsLoading } from "./reducer";
import { loginValidation } from "../../../utillis/authentication/loginValidation";
import { replace } from "../../../routes/rootNavigation";
import { showToast } from '../../../components/toastMessage/simpleToast';

export const onSubmit = async () => {
    const { email, password } = store.getState().loginReducer
    const validate = loginValidation({ email, password })
    store.dispatch(setErrorText(validate.error))
    if (validate.valid) {
        const body = {
            email,
            password
        }
        store.dispatch(setIsLoading(true))
        const response = await loginApi({ body })
        if (response !== "Error") {
            showToast(response.data.error)
            store.dispatch(setIsLoading(false))
            store.dispatch(setUserData(response.data))
            replace('Tabs')
        }
        store.dispatch(setIsLoading(false))
    }
}
export const shouldDisabled = () => {
    const { email, password } = store.getState().loginReducer
    if (email && password) {
        return true
    } else {
        return false
    }
}