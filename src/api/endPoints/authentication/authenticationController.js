import { post_request } from "../../methods";
import { loginTarget, resetPasswordTarget } from "./targets";
export const loginApi = async ({ body }) => {
    const data = await post_request({ target: loginTarget, body });
    return data;
}
export const resetPasswordApi = async ({ body }) => {
    const data = await post_request({ target: resetPasswordTarget, body });
    return data;
}