import { useCookies } from "react-cookie";

export const GetCookie = (name) => {
    const [cookies] = useCookies([name]);
    return cookies[name];
}