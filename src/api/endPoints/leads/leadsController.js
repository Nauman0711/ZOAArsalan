import { get_request, post_request, post_request_formData, delete_request } from "../../methods";
import { deleteImageTarget, getCommentsTarget, leadStatusTarget, leadTarget, submitLeadsTarget, uploadFileTarget } from "./targets";
export const getLeadsApi = async ({ params }) => {
    const data = await get_request({ target: leadTarget, params });
    return data;
}
export const uploadFileApi = async ({ body, onUploadProgress }) => {
    const data = await post_request_formData({ target: uploadFileTarget, body, onUploadProgress });
    return data.data;
}
export const submitLeadsApi = async ({ body }) => {
    const data = await post_request({ target: submitLeadsTarget, body });
    return data;
}
export const getLeadsSubmissionApi = async ({ params }) => {
    const data = await get_request({ target: submitLeadsTarget, params });
    return data;
}
export const getReadOnlyLeadsApi = async ({ leadId }) => {
    const data = await get_request({ target: submitLeadsTarget + "/" + leadId });
    return data;
}
export const getCommentsApi = async ({ params }) => {
    const data = await get_request({ target: getCommentsTarget, params });
    return data;
}
export const postCommentApi = async ({ body }) => {
    const data = await post_request({ target: getCommentsTarget, body });
    return data;
}
export const deleteImageApi = async ({ filename }) => {
    const data = await delete_request({ target: deleteImageTarget + filename });
    return data;
}
export const getLeadsInfoApi = async ({ id }) => {
    const data = await get_request({ target: leadTarget + "/" + id });
    return data;
}
export const leadStatusApi = async ({ body, id }) => {
    const data = await post_request({ target: leadStatusTarget + id, body });
    return data;
}