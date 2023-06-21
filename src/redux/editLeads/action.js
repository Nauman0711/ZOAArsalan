import { launchImageLibrary } from 'react-native-image-picker';
import { store } from "../store/store";
import { getLeadsApi, uploadFileApi } from "../../api/endPoints/leads/authenticationController";
import { setIsLoading, setLeadsData, setFiles, setSelectedFiles, updateFileProgress, clearFileProgress } from "./reducer";

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
            const uploadPromises = response.assets.map(async(file) => {
                const body = new FormData();
                body.append('file', {
                    uri: file.uri,
                    type: file.type,
                    name: file.fileName,
                })
                body.append('filename', file.fileName)
                body.append('type', file.type)
                const response = await uploadFileApi({
                    body, onUploadProgress: (progressEvent) => {
                        const progress = progressEvent.loaded / progressEvent.total;
                        store.dispatch(updateFileProgress(({ sFile: file, progress })));
                    }
                })
               return response.data
            })
            const responses = await Promise.all(uploadPromises);
            store.dispatch(setSelectedFiles(responses))
            console.log(JSON.stringify(responses));
        }
    });
}