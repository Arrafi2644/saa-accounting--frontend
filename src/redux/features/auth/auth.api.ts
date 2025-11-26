import type { IRegister, IResponse, IUser, IUserApiResponse } from "@/types";
import { baseApi } from "../baseApi";
import { IRegisterResponse } from "@/types/auth.types";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<IResponse<IRegisterResponse>, IRegister>({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo
            }),
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            }),
            // invalidatesTags: ["USER"]
        }),
     userInfo: builder.query<IUserApiResponse, void>({
  query: () => ({
    url: "/user/me",
    method: "GET",
  }),
})

    })
})

export const { useRegisterMutation, useLoginMutation, useLogoutMutation,
    useUserInfoQuery
} = authApi;