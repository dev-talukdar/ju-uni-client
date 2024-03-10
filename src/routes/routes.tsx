import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./AdminRoutes";
import routeGenerator from "../utils/routeGenerator";
import { facultyPaths } from "./FacultyRoutes";
import { studentPaths } from "./StudentRoutes";
import Login from "../pages/Public/Login";
import ProtectedRoute from "../components/layout/protectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoute role="faculty">
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
