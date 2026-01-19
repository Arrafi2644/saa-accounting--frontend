import { baseApi } from "../baseApi";
import type { IArticle, IResponse, GetQueryParams, IPaginationMeta } from "@/types";

interface GetAllArticlesResponse {
    success: boolean;
    data: IArticle[];
    meta: IPaginationMeta;
}

export const articleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // CREATE ARTICLE
    createArticle: builder.mutation<IResponse<IArticle>, Partial<IArticle>>({
      query: (articleData) => ({
        url: "/resources/articles",
        method: "POST",
        data: articleData,
      }),
      invalidatesTags: ["ARTICLES"],
    }),

    // UPDATE ARTICLE
    updateArticle: builder.mutation<
      IResponse<IArticle>,
      { id: string; data: Partial<IArticle> }
    >({
      query: ({ id, data }) => ({
        url: `/resources/articles/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "ARTICLES",
        { type: "ARTICLE", id },
      ],
    }),

    // DELETE ARTICLE
    deleteArticle: builder.mutation<IResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/resources/articles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "ARTICLES",
        { type: "ARTICLE", id },
      ],
    }),

    // GET SINGLE ARTICLE
    getSingleArticle: builder.query<IResponse<IArticle>, string>({
      query: (id) => ({
        url: `/resources/articles/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "ARTICLE", id }],
    }),

    // GET ALL ARTICLES
    getAllArticles: builder.query<GetAllArticlesResponse, GetQueryParams>({
      query: (params) => ({
        url: "resources/articles",
        method: "GET",
        params,
      }),
      providesTags: ["ARTICLES"],
    }),

  }),
  overrideExisting: true,
});


export const {
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useGetSingleArticleQuery,
  useGetAllArticlesQuery,
} = articleApi;
