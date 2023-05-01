import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie';

export const rationApi = createApi({
  reducerPath: 'rationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
  endpoints: (builder) => ({
    signUp_user: builder.mutation({
      query: (user) => {
        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('name', user.name);
        formData.append('rationId', user.rationId);
        formData.append('password', user.password);
        formData.append('password2', user.password2);
        formData.append('tc', user.tc);
        formData.append('face_image', user.face_image);

        return {
          method: 'POST',
          url: 'register/',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        };
      },
    }),
    login_user: builder.mutation({
      query: (user) => {
        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('rationId', user.rationId);
        formData.append('password', user.password);
        return {
          method: 'POST',
          url: 'login/',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        };
      },
    }),
    getLogged_user: builder.query({
      query: (access_token) => {
        return {
          method: 'GET',
          url: 'profile/',
          // body: formData,
          headers: {
            "authorization": `Bearer ${access_token}`,
            // Accept: 'application/json',
          },
        };
      },
    }),
    faceVerify_user: builder.mutation({
      query: (user) => {
        const formData = new FormData();
        formData.append('face_image', user.face_image);
        return {
          method: 'POST',
          url: 'faceauthentication/',
          body: formData,
          headers: {
            Authorization: `Bearer ${Cookies.get('access_token')}`,
            Accept: 'application/json',
          },
        };
      },
    }),
    
    user_kyc: builder.mutation({
      query: (user,access_token) => {
        const formData = new FormData();
        formData.append('village', user.village);
        formData.append('houseNo', user.houseNo);
        formData.append('post_office', user.post_office);
        formData.append('pin', user.pin);
        formData.append('Annual_income', user.Annual_income);
        return {
          method: 'POST',
          url: 'rationkyc/',
          body: formData,
          headers: {
            Authorization: `Bearer ${Cookies.get('access_token')}`,
            Accept: 'application/json',
          },
        };
      },
    }),
  }),
});

export const { useSignUp_userMutation,useLogin_userMutation,useGetLogged_userQuery,useFaceVerify_userMutation, useUser_kycMutation} = rationApi;
