import { launchImageLibrary } from 'react-native-image-picker';
import { store } from "../store/store";
import { getLeadsApi, getLeadsInfoApi, leadStatusApi, uploadFileApi } from "../../api/endPoints/leads/leadsController";
import { addLeadsData, setCurrentPage, setFiles, setIsLoading, setIsLoadingLeadsStatus, setIsStatusShowModal, setLeadInfo, setLeadsData, setReason, setRefreshing, setSelectedFiles, setStatus, setTotalPages, updateFileProgress } from "./reducer";
import { showToast } from '../../components/toastMessage/simpleToast';

export const onMount = async () => {
    store.dispatch(setIsLoading(true))
    await fetchData()
    store.dispatch(setIsLoading(false))
}
const fetchData = async () => {
    const response = await getLeadsApi({})
    if (response !== "Error") {
        store.dispatch(setLeadsData(response.data?.data))
        store.dispatch(setCurrentPage(response.data.currentPage))
        store.dispatch(setTotalPages(response.data.pageCount))
    }
}
export const onRefresh = async () => {
    store.dispatch(setRefreshing(true))
    await fetchData()
    store.dispatch(setRefreshing(false))
}
export const dateFuction = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}.${year}`
}
export const updateProfilePicture = async () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1, selectionLimit: 13 }, async response => {
        if (response.didCancel) {
            console.log('Photo uploading is cancelled');
            return null
        } else if (response.error) {
            console.log(response.error);
            return null
        }
        else {
            await store.dispatch(setFiles(response.assets))
            const uploadPromises = response.assets.map((file) => {
                const body = new FormData();
                body.append('file', {
                    uri: file.uri,
                    type: file.type,
                    name: file.fileName,
                })
                body.append('filename', file.fileName)
                body.append('type', file.type)
                return uploadFileApi({
                    body, onUploadProgress: (progressEvent) => {
                        const progress = progressEvent.loaded / progressEvent.total;
                        store.dispatch(updateFileProgress(({ sFile: file, progress })));
                    }
                })
            })
            const responses = await Promise.all(uploadPromises);
            store.dispatch(setSelectedFiles(responses))
        }
    });
}
export const loadMore = async () => {
    const { currentPage, totalPages } = store.getState().leadsReducer
    if (currentPage + 1 < totalPages) {
        const page = currentPage + 1
        const params = {
            page
        }
        const response = await getLeadsApi({ params })
        if (response !== 'Error') {
            store.dispatch(addLeadsData(response.data?.data))
            store.dispatch(setCurrentPage(response.data.currentPage))
            store.dispatch(setTotalPages(response.data.pageCount))
        }
    }
}
export const leadInfoAction = async (id) => {
    const response = await getLeadsInfoApi({ id })
    if (response !== "Error") {
        store.dispatch(setLeadInfo(response.data?.data))
    }
}
export const shouldEnableReason = () => {
    const { reason } = store.getState().leadsReducer
    if (reason) {
        return true
    } else {
        return false
    }
}
export const onSubmitLeadStatus = async () => {
    const { modalData, status, reason: statusReason } = store.getState().leadsReducer
    const body = {
        status,
        statusReason
    }
    store.dispatch(setIsLoadingLeadsStatus(true))
    const response = await leadStatusApi({ body, id: modalData?.id })
    if (response !== "Error") {
        showToast("Action Perform Successfully")
        store.dispatch(setReason(''))
        store.dispatch(setStatus(''))
        onRefresh()
    }
    store.dispatch(setIsStatusShowModal(false))
    store.dispatch(setIsLoadingLeadsStatus(false))
}