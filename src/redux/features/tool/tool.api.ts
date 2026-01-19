// redux/features/tool/tool.api.ts
import { IPaginationMeta, ITool } from "@/types";
import { baseApi } from "../baseApi";

interface GetAllToolsResponse {
  success: boolean;
  data: ITool[];
  meta: IPaginationMeta;
}

export const toolApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
getAllTools: builder.query<
      GetAllToolsResponse,
      {
        page?: number;
        limit?: number;
        searchTerm?: string;
        sort?: string;
      }
    >({
      query: (params) => ({
        url: "/resources/tools",
        method: "GET",
        params,
      }),
      providesTags: ["TOOLS"],
    }),

    // CREATE TOOL
    createTool: builder.mutation<{ data: ITool; success: boolean }, ITool>({
      query: (tool) => ({
        url: "/resources/tools",
        method: "POST",
        data: tool,
      }),
      invalidatesTags: ["TOOLS"],
    }),

    // UPDATE TOOL
    updateTool: builder.mutation<{ data: ITool; success: boolean }, { id: string; data: Partial<ITool> }>({
      query: ({ id, data }) => ({
        url: `/resources/tools/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: (result, error, { id }) => ["TOOLS", { type: "TOOL", id }],
    }),

    // DELETE TOOL
    deleteTool: builder.mutation<{ data: { id: string }; success: boolean }, string>({
      query: (id) => ({
        url: `/resources/tools/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TOOLS", { type: "TOOL" }],
    }),

    // GET SINGLE TOOL
    getSingleTool: builder.query<{ data: ITool; success: boolean }, string>({
      query: (id) => ({
        url: `/resources/tools/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "TOOL", id }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllToolsQuery,
  useCreateToolMutation,
  useUpdateToolMutation,
  useDeleteToolMutation,
  useGetSingleToolQuery,
} = toolApi;
