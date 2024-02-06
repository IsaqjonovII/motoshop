import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants";
import { IBackendResponse } from "interfaces";
import { IPostAd } from "interfaces/forms";
import { IAd } from "interfaces/responses";
import { SetStateAction } from "react";

export const adApi = createApi({
  reducerPath: "adAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Ad", "Random-Ads"],
  endpoints: (builder) => ({
    uploadAd: builder.mutation<IBackendResponse, IPostAd>({
      query: (adForm) => ({
        url: "/ad",
        method: "POST",
        body: adForm,
      }),
      invalidatesTags: ["Ad"],
    }),
    getAllAds: builder.query<IBackendResponse, IPostAd[]>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    getAdById: builder.query<IBackendResponse, IPostAd>({
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
    getAdsByCategory: builder.query<SetStateAction<IAd[]>, string>({
      query: (category) => ({
        url: "/ad/ads-by-category/" + category,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUploadAdMutation,
  useGetAllAdsQuery,
  useGetAdByIdQuery,
  useDeleteAdMutation,
  useGetAdsByCategoryQuery,
} = adApi;
