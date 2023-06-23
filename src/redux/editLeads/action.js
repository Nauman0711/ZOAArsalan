import { launchImageLibrary } from 'react-native-image-picker';
import { store } from "../store/store";
import { getCommentsApi, getReadOnlyLeadsApi, postCommentApi, submitLeadsApi, uploadFileApi } from "../../api/endPoints/leads/authenticationController";
import { setIsLoading, setFiles, setSelectedFiles, updateFileProgress, setNotes, setIsUploaded, setCommentIsLoading, setComments, setUpdatedComments } from "./reducer";
import { goBack } from '../../routes/rootNavigation';

export const onMount = async ({ leadId }) => {
    store.dispatch(setIsLoading(true))
    await fetchData({ leadId })
    getCommentsAction(leadId)
    store.dispatch(setIsLoading(false))
}
const fetchData = async ({ leadId }) => {
    const response = await getReadOnlyLeadsApi({ leadId })
    if (response !== "Error") {
        console.log(JSON.stringify(response.data), "this is aajajajajj");
        store.dispatch(setFiles(response.data?.data?.files))
        store.dispatch(setNotes(response.data?.data?.note))
    }
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
            store.dispatch(setIsUploaded(false))
            const uploadPromises = response.assets.map((file) => {
                const body = new FormData();
                body.append('file', {
                    uri: file.uri,
                    type: file.type,
                    name: file.fileName,
                })
                body.append('filename', file.fileName)
                body.append('type', file.type)
                const response = uploadFileApi({
                    body, onUploadProgress: (progressEvent) => {
                        const progress = progressEvent.loaded / progressEvent.total;
                        store.dispatch(updateFileProgress(({ sFile: file, progress })));
                    }
                })
                return response
            })
            const responses = await Promise.all(uploadPromises);
            store.dispatch(setSelectedFiles(responses))
            store.dispatch(setIsUploaded(true))
        }
    });
}
export const shouldDisable = () => {
    const { note, files, isUploaded } = store.getState().editLeadsReducer
    if (note && files.length > 0 && isUploaded) {
        return true
    } else {
        return false
    }
}
export const onSubmit = async ({ leadCode, leadId }) => {
    const { note, selectedFiles } = store.getState().editLeadsReducer
    const body = {
        files: selectedFiles,
        note,
        leadId,
        leadCode
    }
    store.dispatch(setIsLoading(true))
    const response = await submitLeadsApi({ body })
    if (response !== "Error") {
        resetStates()
        goBack()
    }
    store.dispatch(setIsLoading(false))
}
export const getCommentsAction = async (leadDataId) => {
    const params = {
        leadDataId
    }
    store.dispatch(setCommentIsLoading(true))
    const response = await getCommentsApi({ params })
    if (response !== "Error") {
        store.dispatch(setComments(response.data?.data))
    }
    store.dispatch(setCommentIsLoading(false))
}
export const postComment = async ({ leadDataId, leadCode, leadId, comment }) => {
    const body = {
        leadCode,
        leadId,
        leadDataId,
        comment
    }
    store.dispatch(setCommentIsLoading(true))
    const response = await postCommentApi({ body })
    if (response !== "Error") {
        store.dispatch(setUpdatedComments(response.data.data))
    }
    store.dispatch(setCommentIsLoading(false))
}
export const resetStates = () => {
    store.dispatch({ type: 'resetEditLeads' })
}
export const shouldDisablePostComment = ({ leadDataId, leadCode, leadId, comment }) => {
    if (leadDataId && leadCode && leadId && comment.length > 0) {
        return false
    } else {
        return true
    }
}