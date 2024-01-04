import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants";
import { IBackendResponse } from "interfaces";

interface ILoginForm {
  phone: string | number;
  password: string;
}

interface IRegisterForm extends ILoginForm {
  name: string;
}

export const appAPI = createApi({
  reducerPath: "appapi",
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
    userInfo: builder.query({
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
} = appAPI;
