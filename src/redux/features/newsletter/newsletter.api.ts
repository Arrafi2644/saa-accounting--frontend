import { baseApi } from "../baseApi";
import type { GetQueryParams, INewsletter, IPaginationMeta, IResponse } from "@/types";

interface GetAllNewslettersResponse {
    success: boolean;
    data: INewsletter[];
    meta: IPaginationMeta;
}

export const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    deleteNewsletter: builder.mutation<IResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/newsletters/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "NEWSLETTERS",
        { type: "NEWSLETTER", id },
      ],
    }),

    getAllNewsletters: builder.query<GetAllNewslettersResponse, GetQueryParams>({
      query: (params) => ({
        url: "/newsletters",
        method: "GET",
        params: params
      }),
      providesTags: ["NEWSLETTERS"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useDeleteNewsletterMutation,
  useGetAllNewslettersQuery,
} = newsletterApi;
