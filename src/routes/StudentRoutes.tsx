import StudentOfferedCourse from "../pages/student/Courses/StudentOfferedCourse";
import StudentSchedule from "../pages/student/Schedule/StudentSchedule";
import StudentDashbaord from "../pages/student/StudentDashbaord";

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
  {
    name: "My Schedule",
    path: "schedule",
    element: <StudentSchedule></StudentSchedule>,
  },
];
