import { baseApi } from "../baseApi";
import type { IMessage, IPaginationMeta, IResponse } from "@/types";

interface GetAllMessagesResponse {
    success: boolean;
    data: IMessage[];
    meta: IPaginationMeta;
}

export const messageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // ⭐ CREATE MESSAGE
        createMessage: builder.mutation<IResponse<IMessage>, IMessage>({
            query: (data) => ({
                url: "/message",
                method: "POST",
                data,
            }),
            invalidatesTags: ["MESSAGES"],
        }),

        // ⭐ DELETE MESSAGE
        deleteMessage: builder.mutation<IResponse<{ id: string }>, string>({
            query: (id) => ({
                url: `/message/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => [
                "MESSAGES",
                { type: "MESSAGE", id },
            ],
        }),

        // ⭐ GET SINGLE MESSAGE
        getSingleMessage: builder.query<IResponse<IMessage>, string>({
            query: (id) => ({
                url: `/message/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "MESSAGE", id }],
        }),

        // ⭐ GET All MESSAGE
        getAllMessages: builder.query<GetAllMessagesResponse,
            {
                page?: number;
                limit?: number;
                searchTerm?: string;
                sort?: string;
            }>({
                query: (params) => ({
                    url: "/message",
                    method: "GET",
                    params, // <- this will automatically append as query string
                }),
                providesTags: ["MESSAGES"],
            }),


    }),

    overrideExisting: true,
});

export const {
    useCreateMessageMutation,
    useDeleteMessageMutation,
    useGetSingleMessageQuery,
    useGetAllMessagesQuery,
} = messageApi;
