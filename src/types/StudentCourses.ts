export type TStudentOfferedCourses = {
  _id: string;
  semesterRegistration: string;
  academicSemester: string;
  academicFaculty: string;
  academicDepartment: string;
  Courses: TStudentCourse;
  faculty: string;
  maxCapacity: string;
  section: number;
  days: string[];
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
  enrolledCourses: any[];
  completedCourses: any[];
  completedCourseId: any[];
  isPreRequisitesFulFilled: boolean;
  isAlreadyEnrolled: boolean;
};

export type TStudentCourse = {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisitesCourses: { course: string | null; isDeleted: boolean };
  isDeleted: boolean;
};
