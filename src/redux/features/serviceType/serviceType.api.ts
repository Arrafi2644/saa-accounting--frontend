import { baseApi } from "../baseApi";
import type { GetQueryParams, IResponse, IServiceType } from "@/types";

export const serviceTypeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ⭐ CREATE SERVICE TYPE
    createServiceType: builder.mutation<
      IResponse<IServiceType>,
      IServiceType
    >({
      query: (data) => ({
        url: "service/create-service-type",
        method: "POST",
        data,
      }),
      invalidatesTags: ["SERVICE_TYPES"],
    }),

    // ⭐ UPDATE SERVICE TYPE
    updateServiceType: builder.mutation<
      IResponse<IServiceType>,
      { id: string; data: Partial<IServiceType> }
    >({
      query: ({ id, data }) => ({
        url: `/service/service-types/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "SERVICE_TYPES",
        { type: "SERVICE_TYPE", id },
      ],
    }),

    // ⭐ DELETE SERVICE TYPE
    deleteServiceType: builder.mutation<IResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/service/service-types/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "SERVICE_TYPES",
        { type: "SERVICE_TYPE", id },
      ],
    }),

    // ⭐ GET SINGLE SERVICE TYPE
    getSingleServiceType: builder.query<IResponse<IServiceType>, string>({
      query: (id) => ({
        url: `/service/service-types/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "SERVICE_TYPE", id }],
    }),

    // ⭐ GET ALL SERVICE TYPES
    getAllServiceTypes: builder.query<IResponse<IServiceType[]>, GetQueryParams>({
      query: (params) => ({
        url: "/service/service-types",
        method: "GET",
        params: params
      }),
      providesTags: ["SERVICE_TYPES"],
    }),

  }),

  overrideExisting: true,
});

export const {
  useCreateServiceTypeMutation,
  useUpdateServiceTypeMutation,
  useDeleteServiceTypeMutation,
  useGetSingleServiceTypeQuery,
  useGetAllServiceTypesQuery,
} = serviceTypeApi;
