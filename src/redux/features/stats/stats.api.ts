import { baseApi } from "../baseApi";
import type { IResponse } from "@/types";

interface IJoiningStats {
  totalRequest: number;
  requestInToday: number;
  requestInLast7Days: number;
  requestInLast30Days: number;
}

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ⭐ GET JOINING REQUEST STATS
    getJoiningRequestStats: builder.query<IResponse<IJoiningStats>, void>({
      query: () => ({
        url: "/stats/joining-requests",
        method: "GET",
      }),
      providesTags: ["STATS"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useGetJoiningRequestStatsQuery,
} = statsApi;
