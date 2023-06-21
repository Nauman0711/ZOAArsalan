import { get_request, post_request_formData } from "../../methods";
import { leadTarget, uploadFileTarget } from "./targets";
export const getLeadsApi = async () => {
    const data = await get_request({ target: leadTarget });
    return data;
}
export const uploadFileApi = ({ body, onUploadProgress }) => {
    const data = post_request_formData({ target: uploadFileTarget, body, onUploadProgress });
    return data;
}