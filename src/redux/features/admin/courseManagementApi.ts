import {
  TCourses,
  TOfferedCourse,
  TSemesterRegistration,
} from "../../../types/courseManagementType";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import baseApi from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //semester registration started from here
    getAllRegisteredSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["semester"],

      transformResponse: (
        response: TResponseRedux<TSemesterRegistration[]>
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addRegisteredSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),
    // update semester started from here
    updateRegisteredSemester: builder.mutation({
      query: (args) => ({
        url: `/semester-registrations/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),

    //course registration started from here
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["courses"],

      transformResponse: (response: TResponseRedux<TCourses[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    //course Faculties started from here
    getCourseFaculties: builder.query({
      query: (id) => {
        return {
          url: `/courses/${id}/get-faculties`,
          method: "GET",
        };
      },

      transformResponse: (response: TResponseRedux<TCourses[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    //Offered course registration started from here
    getAllOfferedCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/offered-courses",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["offeredCourse"],

      transformResponse: (response: TResponseRedux<TOfferedCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),

    assignFaculties: builder.mutation({
      query: (args) => ({
        url: `/courses/${args.courseId}/assign-faculties`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["courses"],
    }),

    addOfferedCourse: builder.mutation({
      query: (data) => ({
        url: "offered-courses/create-offered-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["offeredCourse"],
    }),
  }),
});

export const {
  useAddRegisteredSemesterMutation,
  useGetAllRegisteredSemestersQuery,
  useUpdateRegisteredSemesterMutation,
  useGetAllCoursesQuery,
  useAddCourseMutation,
  useAssignFacultiesMutation,
  useGetAllOfferedCoursesQuery,
  useAddOfferedCourseMutation,
  useGetCourseFacultiesQuery,
} = courseManagementApi;
