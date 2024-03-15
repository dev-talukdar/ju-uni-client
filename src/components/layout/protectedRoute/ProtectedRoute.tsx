import { Navigate } from "react-router-dom";
import {
  TUser,
  logout,
  useCurrentToken,
} from "../../../redux/features/auth/authSlice";
import { useAppDispath, useAppSelector } from "../../../redux/hooks/hooks";
import { TProtectedRoutes } from "../../../types/sidebar.types";
import verifyToken from "../../../utils/verifyToken";

const ProtectedRoute = ({ children, role }: TProtectedRoutes) => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispath();

  if (role !== undefined && role !== (user as TUser)?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  // console.log(user);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
