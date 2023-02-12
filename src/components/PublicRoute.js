import { Outlet, Navigate } from "react-router-dom";
import { GetCookie } from "../utils/Cookies.js";

const PublicRoute = () => {
    return (!GetCookie("token") ? <Outlet />: <Navigate to="/home"/>);
}

export default PublicRoute;
