import FacultyDashbaord from "../pages/faculty/FacultyDashbaord";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashbaord></FacultyDashbaord>,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse></OfferedCourse>,
  },
];
