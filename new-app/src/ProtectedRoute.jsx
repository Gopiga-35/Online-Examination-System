import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem("userRole");

  if (!allowedRoles.includes(userRole)) {
    alert("Access Denied! Only teachers can access this page.");
    return <Navigate to="/exam" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
