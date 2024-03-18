import FacultyDashbaord from "../pages/faculty/FacultyDashbaord";
import MyCourses from "../pages/faculty/MyCourses";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashbaord></FacultyDashbaord>,
  },
  {
    name: "My Courses",
    path: "my-courses",
    element: <MyCourses></MyCourses>,
  },
];
