
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const rationApi = createApi({
  reducerPath: 'rationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
  endpoints: (builder) => ({
    signUp_user: builder.mutation({
        query:(user)=>{
            return{
                url:'register/',
                method:'POST',
                body:user,
                headers:{
                    'Content-type':'application/json',
                }
            }
        }
    })
  }),
})
export const {useSignUp_userMutation} = rationApi