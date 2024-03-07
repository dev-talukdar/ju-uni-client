import {
  TAcademicFaculty,
  TAcademicSemester,
} from "../../../types/academicManagementType";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import baseApi from "../../api/baseApi";

const AcademicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all academic semester logic starts from here
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    // Get all academic Faculty logic starts from here
    getAllAcademicFaculty: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-faculties",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    // Get all academic semester logic starts from here
    getAllDepartment: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-departments",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    //academic semester starts from here
    addAcademicSemesters: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    //academic Faculty starts from here
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    //academic Department starts from here
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllSemestersQuery,
  useAddAcademicSemestersMutation,
  useGetAllAcademicFacultyQuery,
  useAddAcademicFacultyMutation,
  useGetAllDepartmentQuery,
  useAddAcademicDepartmentMutation,
} = AcademicManagementApi;
