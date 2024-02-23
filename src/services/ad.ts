/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants";
import { IBackendResponse } from "interfaces";
import { IPostAd } from "interfaces/forms";
import { IAdMoto, IAdHelmetAndGear, IMotoAd } from "interfaces/responses";
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
    getAdById: builder.query<SetStateAction<IAdMoto | IAdHelmetAndGear | IMotoAd | undefined>, string>({
      query: (id) => `ad/${id}`,
    }),
    deleteAd: builder.mutation<IBackendResponse, string>({
      query: (id) => ({
        url: `ad/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Ad"],
    }),
    getAdsByCategory: builder.query<SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>,string>({
      query: (type) => `ad/ads-by-type?type=${type}`,
    }),
    getRandomAds: builder.query<SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>,number>({
      query: (limit) => `ad/random-ads?limit=${limit}`,
    }),
    updateAdView: builder.mutation<IBackendResponse,{ userId: string; adId: string }>({
      query: ({ userId, adId }) => ({
        url: `ad/update-view?userId=${userId}&adId=${adId}`,
        method: "POST",
      }),
      invalidatesTags: ["Ad"]
    }),
    updateLikes: builder.mutation<IBackendResponse,{ userId: string | any; adId: string }>({
      query: ({ userId, adId }) => ({
        url: `ad/add-like?userId=${userId}&adId=${adId}`,
        method: "POST",
      }),
      invalidatesTags: ["Ad"]
    }),
    removeLike: builder.mutation<IBackendResponse,{ userId: string | any; adId: string }>({
      query: ({ userId, adId }) => ({
        url: `ad/remove-like?userId=${userId}&adId=${adId}`,
        method: "POST",
      }),
      invalidatesTags: ["Ad"]
    }),
    getSimilarAds: builder.query<SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>,{ type: string; id: string }>({
      query: ({ type, id }) => `ad/similar-ads?type=${type}&id=${id}`,
    }),
    getAdsByUser: builder.query<SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>, { userId: string; adId?: string }>({
      query: ({ userId, adId }) => `ad/ads-by-user?id=${userId}&${adId && "adId=" + adId}`,
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
  useUpdateAdViewMutation,
  useUpdateLikesMutation,
  useRemoveLikeMutation,
  useGetSimilarAdsQuery,
  useGetAdsByUserQuery,
} = adApi;
