import { baseApi } from "../baseApi";
import type { GetQueryParams, IJoiningRequest, IResponse } from "@/types";

export const joiningRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ⭐ CREATE JOINING REQUEST
    createJoiningRequest: builder.mutation<
      IResponse<IJoiningRequest>,
      IJoiningRequest
    >({
      query: (data) => ({
        url: "/join-us-form",
        method: "POST",
        data,
      }),
      invalidatesTags: ["JOINING_REQUESTS"],
    }),

    // ⭐ DELETE JOINING REQUEST
    deleteJoiningRequest: builder.mutation<IResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/join-us-form/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "JOINING_REQUESTS",
        { type: "JOINING_REQUEST", id },
      ],
    }),

    // ⭐ GET SINGLE JOINING REQUEST
    getSingleJoiningRequest: builder.query<IResponse<IJoiningRequest>, string>({
      query: (id) => ({
        url: `/join-us-form/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "JOINING_REQUEST", id }],
    }),

    // ⭐ GET ALL JOINING REQUESTS
    getAllJoiningRequests: builder.query<IResponse<IJoiningRequest[]>, GetQueryParams>({
      query: (params) => ({
        url: "/join-us-form",
        method: "GET",
        params: params,
      }),
      providesTags: ["JOINING_REQUESTS"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useCreateJoiningRequestMutation,
  useDeleteJoiningRequestMutation,
  useGetSingleJoiningRequestQuery,
  useGetAllJoiningRequestsQuery,
} = joiningRequestApi;
