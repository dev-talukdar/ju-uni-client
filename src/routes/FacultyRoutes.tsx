import FacultyDashbaord from "../pages/faculty/FacultyDashbaord";
import MyCourses from "../pages/faculty/MyCourses";
import MyStudent from "../pages/faculty/MyStudent";

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
  {
    path: "courses/:registerSemesterId/:courseId",
    element: <MyStudent></MyStudent>,
  },
];
