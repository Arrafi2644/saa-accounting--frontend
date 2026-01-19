import { baseApi } from "../baseApi";
import type { GetQueryParams, IPaginationMeta, IResponse, ISEO } from "@/types";

interface GetAllSEOsResponse {
    success: boolean;
    data: ISEO[];
    meta: IPaginationMeta;
}

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
    getAllSEO: builder.query<GetAllSEOsResponse, GetQueryParams>({
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
