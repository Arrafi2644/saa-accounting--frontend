import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["USERS", "USER", "SERVICES", "SERVICE",
     "SERVICE_TYPE", "SERVICE_TYPES", "JOINING_REQUESTS",
      "JOINING_REQUEST", "REFERRALS", "REFERRAL", "MESSAGES",
       "MESSAGE", "TESTIMONIALS", "TESTIMONIAL", "SEOS", "SEO", "SITEINFO", "STATS"],
  endpoints: () => ({}),

});