import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants";
import { IBackendResponse } from "interfaces";
import { IPostAd } from "interfaces/forms";
import { IAdMoto, IAdHelmetAndGear } from "interfaces/responses";
import { SetStateAction } from "react";

export const adApi = createApi({
  reducerPath: "adAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Ad"],
  endpoints: (builder) => ({
    uploadAd: builder.mutation<IBackendResponse, IPostAd>({
      query: (adForm) => ({
        url: "/ad",
        method: "POST",
        body: adForm,
      }),
      invalidatesTags: ["Ad"],
    }),
    getAllAds: builder.query<IAdMoto[] | IAdHelmetAndGear[], void>({
      query: () => "/ad",
    }),
    getAdById: builder.query<IBackendResponse, IPostAd>({
      query: (id) => `ad/${id}`,
    }),
    deleteAd: builder.mutation<IBackendResponse, string>({
      query: (id) => ({
        url: `ad/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Ad"],
    }),
    getAdsByCategory: builder.query<
      SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>,
      string
    >({
      query: (type) => `ad/ads-by-type?type=${type}`,
    }),
    getRandomAds: builder.query<
      SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>,
      number
    >({
      query: (limit) => `ad/random-ads?limit=${limit}`,
    }),
  }),
});

export const {
  useUploadAdMutation,
  useGetAllAdsQuery,
  useGetAdByIdQuery,
  useDeleteAdMutation,
  useGetAdsByCategoryQuery,
  useGetRandomAdsQuery,
} = adApi;
