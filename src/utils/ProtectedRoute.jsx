import Cookies from "js-cookie";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
  return Cookies.get("jwtToken") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
