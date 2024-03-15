import { TStudentOfferedCourses } from "../../../types/StudentCourses";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import baseApi from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //All Offered course started from here
    getAllOfferedCourse: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/offered-courses/my-offered-courses",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["semester"],

      transformResponse: (
        response: TResponseRedux<TStudentOfferedCourses[]>
      ) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetAllOfferedCourseQuery } = studentCourseApi;
