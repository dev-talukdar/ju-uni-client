import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { TProtectedRoutes } from "../../../types/sidebar.types";

const ProtectedRoute = ({ children }: TProtectedRoutes) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
