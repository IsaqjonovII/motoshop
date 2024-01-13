import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants";
import { IBackendResponse, IUser } from "interfaces";

export interface IAdForm {
  name: string;
  description: string;
  price: number | string;
  location: string;
  category: string;
  images: string[];
  owner: string | IUser;
}

export const adApi = createApi({
  reducerPath: "adAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Ad"],
  endpoints: (builder) => ({
    uploadAd: builder.mutation<IBackendResponse, IAdForm>({
      query: (adForm) => ({
        url: "/ad",
        method: "POST",
        body: adForm,
      }),
      invalidatesTags: ["Ad"],
    }),
    getAllAds: builder.query<IBackendResponse, IAdForm[]>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getAdById: builder.query<IBackendResponse, IAdForm>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    deleteAd: builder.mutation<IBackendResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useUploadAdMutation,
  useGetAllAdsQuery,
  useGetAdByIdQuery,
  useDeleteAdMutation,
} = adApi;
