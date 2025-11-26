import { baseApi } from "../baseApi";
import type { GetQueryParams, IResponse, IService, IServiceApiResponse } from "@/types";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ⭐ CREATE SERVICE
    createService: builder.mutation<IResponse<IService>, IService>({
      query: (serviceData) => ({
        url: "/service",
        method: "POST",
        data: serviceData,
      }),
      invalidatesTags: ["SERVICES"],
    }),

    // ⭐ UPDATE SERVICE
    updateService: builder.mutation<
      IResponse<IService>,
      { id: string; data: Partial<IService> }
    >({
      query: ({ id, data }) => ({
        url: `/service/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "SERVICES",
        { type: "SERVICE", id },
      ],
    }),

    // ⭐ DELETE SERVICE
    deleteService: builder.mutation<IResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "SERVICES",
        { type: "SERVICE", id },
      ],
    }),

    // ⭐ GET SINGLE SERVICE
    getSingleService: builder.query<IServiceApiResponse, string>({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "SERVICE", id }],
    }),

    // ⭐ GET ALL SERVICES
    getAllServices: builder.query<IResponse<IService[]>, GetQueryParams>({
      query: (params) => ({
        url: "/service",
        method: "GET",
        params: params
      }),
      providesTags: ["SERVICES"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useGetSingleServiceQuery,
  useGetAllServicesQuery,
} = serviceApi;
