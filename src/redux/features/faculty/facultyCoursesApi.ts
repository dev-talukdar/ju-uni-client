import { TStudentOfferedCourses } from "../../../types/StudentCourses";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import baseApi from "../../api/baseApi";

const facultyCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //All Offered course started from here
    getAllFacultyCourse: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/enrolled-courses",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["offeredCourse"],

      transformResponse: (
        response: TResponseRedux<TStudentOfferedCourses[]>
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addMarkstoStudent: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/update-enrolled-course-marks",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllFacultyCourseQuery, useAddMarkstoStudentMutation } =
  facultyCourseApi;
