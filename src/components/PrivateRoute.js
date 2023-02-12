import { Outlet, Navigate } from "react-router-dom";
import { GetCookie } from "../utils/Cookies.js";

const PrivateRoute = () => {
    return (GetCookie("token") ? <Outlet />: <Navigate to="/login"/>);
}

export default PrivateRoute;
