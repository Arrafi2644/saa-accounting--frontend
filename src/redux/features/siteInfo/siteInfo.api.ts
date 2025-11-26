// services/siteInfoApi.ts
import { baseApi } from "../baseApi";
import type { IResponse, ISiteInfo, ISiteInfoResponse } from "@/types";

export const siteInfoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // CREATE
        createSiteInfo: builder.mutation<IResponse<ISiteInfo>, Partial<ISiteInfo>>({
            query: (data) => ({
                url: "/site-info",
                method: "POST",
                data,
            }),
            invalidatesTags: ["SITEINFO"],
        }),

        updateSiteInfo: builder.mutation<IResponse<ISiteInfo>, Partial<ISiteInfo>>({
            query: (data) => ({
                url: `/site-info`,
                method: "PATCH",
                data, // send only the fields you want to update
            }),
            invalidatesTags: ["SITEINFO"],
        }),
        
        getSiteInfo: builder.query<ISiteInfoResponse, void>({
            query: () => ({
                url: "/site-info",
                method: "GET", // optional, default ই GET
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