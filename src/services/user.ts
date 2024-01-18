import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants";
import { IBackendResponse, IUser } from "interfaces";
import { ILoginForm, IRegisterForm } from "interfaces/forms";

export const authApi = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    register: builder.mutation<IBackendResponse, IRegisterForm>({
      query: (formData) => ({
        url: "auth",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation<IBackendResponse, ILoginForm>({
      query: (formData) => ({
        url: "auth/login",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    userInfo: builder.query<IBackendResponse, IUser>({
      query: (details) => ({
        url: "auth/info",
        method: "GET",
        body: details,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUserInfoQuery,
} = authApi;
