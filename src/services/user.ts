import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants";
import { IBackendResponse } from "interfaces";

type TAuthForm = {
  phone: string | number;
  password: string;
};

export const appAPI = createApi({
  reducerPath: "appapi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    register: builder.mutation<IBackendResponse, TAuthForm>({
      query: (formData) => ({
        url: "auth/register",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation<IBackendResponse, TAuthForm>({
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
