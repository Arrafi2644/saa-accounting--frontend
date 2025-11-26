import { IRegister, IRegisterResponse } from "@/types/auth.types";
import { baseApi } from "../baseApi";
import type { IUser, IUserApiResponse, IResponse, GetQueryParams } from "@/types";

export const userApi = baseApi.injectEndpoints({

  // CREATE USER
  endpoints: (builder) => ({
    register: builder.mutation<IResponse<IRegisterResponse>, IRegister>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo
      }),
      invalidatesTags: (result, error, arg) => ["USERS"], // function version
    }),

    // UPDATE USER
    updateUser: builder.mutation<
      IResponse<IUser>,
      { id: string; data: Partial<IUser> }
    >({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "USERS",
        { type: "USER", id },
      ],
    }),

    // DELETE USER
    deleteUser: builder.mutation<IResponse<{ id: string }>, string>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "USERS",
        { type: "USER", id },
      ],
    }),

    // GET SINGLE USER
    getSingleUser: builder.query<IUserApiResponse, string>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "USER", id }],
    }),

    getAllUsers: builder.query<IResponse<IUser[]>, GetQueryParams>({
      query: (params) => ({
        url: "/user",
        method: "GET",
        params: params
      }),
      providesTags: ["USERS"],
    }),


  }),
  overrideExisting: true,
});

export const {
  useRegisterMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetSingleUserQuery,
  useGetAllUsersQuery,
} = userApi;
