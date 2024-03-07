import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TFaculty, TStudent } from "../../../types/userManagementType";
import baseApi from "../../api/baseApi";

const UserManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudent: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: TResponseRedux<TStudent>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addStudent: builder.mutation({
      query: (data) => ({
        url: "users/create-student/",
        method: "POST",
        body: data,
      }),
    }),

    // create user faculty starts from here

    getAllFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["faculties"],

      transformResponse: (response: TResponseRedux<TFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addFaculty: builder.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["faculties"],
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentQuery,
  useGetAllFacultiesQuery,
  useAddFacultyMutation,
} = UserManagementApi;
