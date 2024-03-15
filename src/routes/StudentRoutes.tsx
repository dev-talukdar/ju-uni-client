import StudentDashbaord from "../pages/student/StudentDashbaord";
import StudentOfferedCourse from "../redux/features/student/Course/StudentOfferedCourse";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashbaord></StudentDashbaord>,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <StudentOfferedCourse></StudentOfferedCourse>,
  },
];
