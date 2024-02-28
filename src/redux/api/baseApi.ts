import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Rootstate } from "../store/store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as Rootstate).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log("sending refresh token");

    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as Rootstate).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryRefreshToken,
  endpoints: () => ({}),
});

export default baseApi;
