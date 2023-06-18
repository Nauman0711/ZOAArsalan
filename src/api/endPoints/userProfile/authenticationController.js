import { get_request } from "../../methods";
import { userProfileTarget } from "./targets";
export const getUserProfileApi = async () => {
    const data = await get_request({ target: userProfileTarget });
    return data;
}