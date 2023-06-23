import { get_request, post_request, post_request_formData } from "../../methods";
import { getCommentsTarget, getImagesTarget, leadTarget, submitLeadsTarget, uploadFileTarget } from "./targets";
export const getLeadsApi = async () => {
    const data = await get_request({ target: leadTarget });
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