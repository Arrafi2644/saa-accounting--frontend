// services/siteInfoApi.ts
import { baseApi } from "../baseApi";
import type { IResponse, ISiteInfo, ISiteInfoResponse } from "@/types";

export const siteInfoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // CREATE
        createSiteInfo: builder.mutation<IResponse<ISiteInfo>, FormData>({
            query: (formData) => ({
                url: "/site-info",
                method: "POST",
                data: formData,
            }),
            invalidatesTags: ["SITEINFO"],
        }),

        updateSiteInfo: builder.mutation<IResponse<ISiteInfo>, FormData>({
            query: (formData) => ({
                url: `/site-info`,
                method: "PATCH",
                data: formData ,
            }),
            invalidatesTags: ["SITEINFO"],
        }),

        getSiteInfo: builder.query<ISiteInfoResponse, void>({
            query: () => ({
                url: "/site-info",
                method: "GET",
            }),
            providesTags: ["SITEINFO"],
        }),
    }),
    overrideExisting: true,
});

export const {
    useCreateSiteInfoMutation,
    useUpdateSiteInfoMutation,
    useGetSiteInfoQuery,
} = siteInfoApi;