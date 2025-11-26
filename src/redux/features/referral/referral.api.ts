import { baseApi } from "../baseApi";
import type { GetQueryParams, IReferralForm, IResponse } from "@/types";

export const referralApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ⭐ CREATE REFERRAL
    createReferral: builder.mutation<
      IResponse<IReferralForm>,
      IReferralForm
    >({
      query: (data) => ({
        url: "/referral-form",
        method: "POST",
        data,
      }),
      invalidatesTags: ["REFERRALS"],
    }),

    // ⭐ DELETE REFERRAL
    deleteReferral: builder.mutation<IResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/referral-form/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "REFERRALS",
        { type: "REFERRAL", id },
      ],
    }),

    // ⭐ GET SINGLE REFERRAL
    getSingleReferral: builder.query<IResponse<IReferralForm>, string>({
      query: (id) => ({
        url: `/referral-form/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "REFERRAL", id }],
    }),

    // ⭐ GET ALL REFERRALS
    getAllReferrals: builder.query<IResponse<IReferralForm[]>, GetQueryParams>({
      query: (params) => ({
        url: "/referral-form",
        method: "GET",
        params: params
      }),
      providesTags: ["REFERRALS"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useCreateReferralMutation,
  useDeleteReferralMutation,
  useGetSingleReferralQuery,
  useGetAllReferralsQuery,
} = referralApi;
