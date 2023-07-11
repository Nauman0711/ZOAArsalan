import { get_request } from "../../methods";
import { notificationsTarget } from "./targets";
export const getNotificationsApi = async ({ params }) => {
    const data = await get_request({ target: notificationsTarget, params });
    return data;
}