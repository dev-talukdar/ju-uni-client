import AcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AllCourses from "../pages/admin/courseManagement/AllCourses";
import AllOffereedCourse from "../pages/admin/courseManagement/AllOffereedCourse";
import AllSemesterReigstration from "../pages/admin/courseManagement/AllSemesterReigstration";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferNewCourse from "../pages/admin/courseManagement/OfferNewCourse";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import AllAdmin from "../pages/admin/userManagement/AllAdmin";
import AllFaculty from "../pages/admin/userManagement/AllFaculty";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreatePayment from "../pages/admin/userManagement/CreatePayment";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentDataTable from "../pages/admin/userManagement/StudentDataTable";
// import StudentDetails from "../pages/admin/userManagement/studentManagement/StudentDetails";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic management",
    children: [
      {
        name: "Create a Semester ",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "Academic Semester",
        path: "academic-semesters",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create a Faculty  ",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty></AcademicFaculty>,
      },
      {
        name: "Create a Department  ",
        path: "create-academic-department",
        element: <CreateAcademicDepartment></CreateAcademicDepartment>,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment></AcademicDepartment>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "All Admin",
        path: "all-admin",
        element: <AllAdmin></AllAdmin>,
      },
      {
        name: "Create Faculty ",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "All Faculty ",
        path: "all-faculty",
        element: <AllFaculty></AllFaculty>,
      },
      {
        name: "Create student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "All Students",
        path: "all-student",
        element: <StudentDataTable></StudentDataTable>,
      },
      // {
      //   path: "all-student/:studentId",
      //   element: <StudentDetails></StudentDetails>,
      // },
      {
        name: "Create Payment",
        path: "create-payment",
        element: <CreatePayment></CreatePayment>,
      },
    ],
  },
  {
    name: "Course management",
    children: [
      {
        name: "Create a Course ",
        path: "create-a-new-course",
        element: <CreateCourse></CreateCourse>,
      },
      {
        name: "All Courses",
        path: "all-courses",
        element: <AllCourses></AllCourses>,
      },
      {
        name: "Offer Course ",
        path: "offer-course",
        element: <OfferNewCourse></OfferNewCourse>,
      },
      {
        name: "All Offered Course",
        path: "all-offered-course",
        element: <AllOffereedCourse></AllOffereedCourse>,
      },
      {
        name: "Semister Registration",
        path: "semester-registration",
        element: <SemesterRegistration></SemesterRegistration>,
      },
      {
        name: "All Semester Registration",
        path: "all-semester-registration",
        element: <AllSemesterReigstration></AllSemesterReigstration>,
      },
    ],
  },
];
