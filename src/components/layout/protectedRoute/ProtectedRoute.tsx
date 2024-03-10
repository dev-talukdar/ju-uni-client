import { Navigate } from "react-router-dom";
import {
  logout,
  selectCurrentUser,
  useCurrentToken,
} from "../../../redux/features/auth/authSlice";
import { useAppDispath, useAppSelector } from "../../../redux/hooks/hooks";
import { TProtectedRoutes } from "../../../types/sidebar.types";

const ProtectedRoute = ({ children, role }: TProtectedRoutes) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispath();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  console.log(user);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
