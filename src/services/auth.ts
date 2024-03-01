import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants";
import { IBackendResponse } from "interfaces";
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
    }),
    login: builder.mutation<IBackendResponse, ILoginForm>({
      query: (formData) => ({
        url: "auth/login",
        method: "POST",
        body: formData,
      }),
    }),
    userInfo: builder.query<IBackendResponse, string>({
      query: (id) => `auth/info?userId=${id}`,
    }),
    updateUser: builder.mutation({
      query: (formData) => ({
        url: "auth/update",
        method: "PUT",
        body: formData,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `auth/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUserInfoQuery,
  useUpdateUserMutation,
  useDeleteUserMutation
} = authApi;
