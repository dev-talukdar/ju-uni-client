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
