import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./AdminRoutes";
import routeGenerator from "../utils/routeGenerator";
import { facultyPaths } from "./FacultyRoutes";
import { studentPaths } from "./StudentRoutes";
import Login from "../pages/Public/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
