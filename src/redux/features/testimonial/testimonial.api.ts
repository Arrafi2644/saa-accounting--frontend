import { baseApi } from "../baseApi";
import type { IResponse, GetQueryParams, ITestimonial } from "@/types";

export const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ⭐ CREATE TESTIMONIAL
    createTestimonial: builder.mutation<
      IResponse<ITestimonial>,
      ITestimonial
    >({
      query: (data) => ({
        url: "/testimonial",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TESTIMONIALS"],
    }),

    // ⭐ UPDATE TESTIMONIAL
    updateTestimonial: builder.mutation<
      IResponse<ITestimonial>,
      { id: string; data: Partial<ITestimonial> }
    >({
      query: ({ id, data }) => ({
        url: `/testimonial/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "TESTIMONIALS",
        { type: "TESTIMONIAL", id },
      ],
    }),

    // ⭐ DELETE TESTIMONIAL
    deleteTestimonial: builder.mutation<IResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/testimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "TESTIMONIALS",
        { type: "TESTIMONIAL", id },
      ],
    }),

    // ⭐ GET SINGLE TESTIMONIAL
    getSingleTestimonial: builder.query<ITestimonial, string>({
      query: (id) => ({
        url: `/testimonial/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "TESTIMONIAL", id }],
    }),

    // ⭐ GET ALL TESTIMONIALS (Supports Filtering + Pagination)
    getAllTestimonials: builder.query<
      IResponse<ITestimonial[]>,
      GetQueryParams
    >({
      query: (params) => ({
        url: "/testimonial",
        method: "GET",
        params,
      }),
      providesTags: ["TESTIMONIALS"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useCreateTestimonialMutation,
  useUpdateTestimonialMutation,
  useDeleteTestimonialMutation,
  useGetSingleTestimonialQuery,
  useGetAllTestimonialsQuery,
} = testimonialApi;
