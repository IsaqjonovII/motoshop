import type { SetStateAction } from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from "constants";
import { IAdHelmetAndGear, IAdMoto } from "interfaces/responses";

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl + "user/",
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getAdsByUser: builder.query<SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>, { userId: string; adId?: string }>({
            query: ({ userId, adId }) => `ads-by-user?id=${userId}&${adId && "adId=" + adId}`,
        }),
        getLikedAds: builder.query<SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>, string>({
          query: (id) => `liked-ads?userId=${id}`
        }),
        getViewedAds: builder.query<SetStateAction<IAdMoto[] | IAdHelmetAndGear[]>, string>({
          query: (id) => `viewed-ads?id=${id}`
        })
    })
})

export const { useGetAdsByUserQuery, useGetLikedAdsQuery, useGetViewedAdsQuery } = userApi;