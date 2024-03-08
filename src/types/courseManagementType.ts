import { TAcademicSemester } from "./academicManagementType";

export type TSemester = {
  _id: string;
  academicSemester: TAcademicSemester;
  status: string;
  startDate: string;
  endDate: string;
  minCredit: number;
  maxCredit: number;
  createdAt: string;
  updatedAt: string;
};

export type TCourses = {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: { course: string | null; isDeleted: boolean }[];
  isDeleted: boolean;
};

export type PreRequisiteCourse = {
  course: any;
  isDeleted: boolean;
};

export type TAllCourse = {
  _id: string;
  title: string;
  code: string;
  prefix: string;
};

export type TOfferedCourse = {
  semesterRegistration: string;
  academicFaculty: string;
  academicDepartment: string;
  course: string;
  faculty: string;
  section: number;
  maxCapacity: number;
  days: string[];
  startTime: string;
  endTime: string;
};

export type TSemesterRegistration = {
  _id: string;
  academicSemester: {
    name: string;
  };
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  minCredit: number;
  maxCredit: number;
};
