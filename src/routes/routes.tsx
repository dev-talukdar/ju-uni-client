import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
]);

export default router;
