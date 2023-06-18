import { store } from "../store/store";
import { getUserProfileApi } from "../../api/endPoints/userProfile/authenticationController";
import { setUserData } from "../user/reducer";

export const onMountUserProfile = () => {
    fetchUserProfile()
}
export const fetchUserProfile = async () => {
    const { userData } = store.getState().userReducer
    if (userData) {
        const response = await getUserProfileApi()
        if (response !== "Error") {
            store.dispatch(setUserData({ ...userData, data: response.data.data }))
        }
    }
}