import { store } from "../store/store";
import { getNotificationsApi } from "../../api/endPoints/notifications/notificationsController";
import { addNotifications, setIsLoading, setNotifications, setRefreshing, setCurrentPage, setTotalPages } from "./reducer";
import { navigate } from "../../routes/rootNavigation";
import { setSelectedBtn } from "../editLeads/reducer";

export const onMount = async () => {
    store.dispatch(setIsLoading(true))
    await fetchData()
    store.dispatch(setIsLoading(false))
}
export const fetchData = async () => {
    const response = await getNotificationsApi({})
    if (response !== "Error") {
        store.dispatch(setNotifications(response.data.data))
        store.dispatch(setCurrentPage(response.data.currentPage))
        store.dispatch(setTotalPages(response.data.pageCount))
    }
}
export const onRefresh = async () => {
    store.dispatch(setRefreshing(true))
    await fetchData()
    store.dispatch(setRefreshing(false))
}
export const loadMore = async () => {
    const { currentPage, totalPages } = store.getState().notificationsReducer
    if (currentPage + 1 < totalPages) {
        const page = currentPage + 1
        const params = {
            page
        }
        const response = await getNotificationsApi({ params })
        if (response !== 'Error') {
            store.dispatch(addNotifications(response.data?.data))
            store.dispatch(setCurrentPage(response.data.currentPage))
            store.dispatch(setTotalPages(response.data.pageCount))
        }
    }
}
export const notificationActions = ({ data }) => {
    if (data?.eventType === "ASSIGNED") {
        navigate('Home')
    } else if (["COMMENT", "APPROVED", "REJECTED"].includes(data?.eventType)) {
        const dataParams = { code: data?.leadCode, id: data?.leadDataId, view: true, leadCode: data?.leadCode, leadId: data?.leadId }
        navigate('EditLeads', { ...dataParams })
        store.dispatch(setSelectedBtn(data?.eventType === "COMMENT" ? "Comments" : "Data"))
    }
}