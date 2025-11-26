import { baseApi } from "../baseApi";
import type { GetQueryParams, IResponse, ISEO } from "@/types";

export const seoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    // ⭐ CREATE SEO
    createSEO: builder.mutation<IResponse<ISEO>, ISEO>({
      query: (seoData) => ({
        url: "/seo",
        method: "POST",
        data: seoData,
      }),
      invalidatesTags: ["SEOS"],
    }),

    // ⭐ UPDATE SEO
// updateSeo: builder.mutation<{ success: boolean; data: ISEO }, { pagePath: string; data: Partial<ISEO> }>({
//   query: ({ pagePath, data }) => ({
//     url: `/seo/${encodeURIComponent(pagePath)}`, // include pagePath in URL
//     method: "PATCH",
//     data: data,
//   }),
//    invalidatesTags: ["SEOS"],
// })
// ,

updateSeo: builder.mutation<{ success: boolean; data: ISEO }, { id: string; data: Partial<ISEO> }>({
  query: ({ id, data }) => ({
    url: `/seo/${id}`, 
    method: "PATCH",
    data: data,    
  }),
  invalidatesTags: ["SEOS"],
}),


    // ⭐ DELETE SEO
    deleteSEO: builder.mutation<IResponse<{ pagePath: string }>, string>({
      query: (pagePath) => ({
        url: `/seo/${pagePath}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "SEOS",
        { type: "SEO", id },
      ],
    }),

    // ⭐ GET SINGLE SEO
    getSingleSEO: builder.query<ISEO, string>({
      query: (id) => ({
        url: `/seo/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "SEO", id }],
    }),

    // ⭐ GET ALL SEO
    getAllSEO: builder.query<IResponse<ISEO[]>, GetQueryParams>({
      query: (params) => ({
        url: "/seo",
        method: "GET",
        params: params,
      }),
      providesTags: ["SEOS"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useCreateSEOMutation,
  useUpdateSeoMutation,
  useDeleteSEOMutation,
  useGetSingleSEOQuery,
  useGetAllSEOQuery,
} = seoApi;
