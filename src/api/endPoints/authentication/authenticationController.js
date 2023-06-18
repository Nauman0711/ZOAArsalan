import { post_request } from "../../methods";
import { loginTarget } from "./targets";
export const loginApi = async ({ body }) => {
    const data = await post_request({ target: loginTarget, body });
    return data;
}