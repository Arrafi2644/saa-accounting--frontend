import { baseApi } from "../baseApi";
import type { GetQueryParams, IPaginationMeta, IResponse, IService, IServiceApiResponse } from "@/types";

interface GetAllServicesResponse {
  success: boolean;
  data: IService[];
  meta: IPaginationMeta;
}

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createService: builder.mutation<IResponse<IService>, FormData>({
      query: (formData) => ({
        url: "/service/create-service",
        method: "POST",
        data: formData,
      }),
      invalidatesTags: ["SERVICES"],
    }),

    // ⭐ UPDATE SERVICE (FormData Version)
    updateService: builder.mutation<IResponse<IService>, { id: string; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/service/update-service/${id}`,
        method: "PATCH",
        data: formData,
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
      query: (slug) => ({
        url: `/service/${slug}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "SERVICE", id }],
    }),

    // ⭐ GET ALL SERVICES
    getAllServices: builder.query<GetAllServicesResponse, GetQueryParams>({
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
