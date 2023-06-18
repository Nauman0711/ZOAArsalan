import { store } from "../store/store";
import { getLeadsApi } from "../../api/endPoints/leads/authenticationController";
import { setIsLoading, setLeadsData } from "./reducer";

export const onMount = async () => {
    store.dispatch(setIsLoading(true))
    await fetchData()
    store.dispatch(setIsLoading(false))
}
const fetchData = async () => {
    const response = await getLeadsApi({})
    if (response !== "Error") {
        store.dispatch(setLeadsData(response.data?.data))
    }
}
export const dateFuction = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}.${year}`
}