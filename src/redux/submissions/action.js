import { store } from "../store/store";
import { getLeadsSubmissionApi } from "../../api/endPoints/leads/authenticationController";
import { setIsLoading, setLeadsSubmission } from "./reducer";

export const onMount = async ({ id }) => {
    const params = {
        leadId: id
    }
    store.dispatch(setIsLoading(true))
    const response = await getLeadsSubmissionApi({ params })
    if (response !== "Error") {
        store.dispatch(setLeadsSubmission(response.data?.data))
    }
    store.dispatch(setIsLoading(false))
}
export const resetStates = () => {
    store.dispatch({ type: 'resetSubmission' })
}