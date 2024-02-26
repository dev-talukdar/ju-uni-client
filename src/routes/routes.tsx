import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./AdminRoutes";
import routeGenerator from "../utils/routeGenerator";

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
    children: routeGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
]);

export default router;
