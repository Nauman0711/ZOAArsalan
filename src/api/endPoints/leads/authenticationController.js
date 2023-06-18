import { get_request } from "../../methods";
import { leadTarget } from "./targets";
export const getLeadsApi = async () => {
    const data = await get_request({ target: leadTarget });
    return data;
}