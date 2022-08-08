import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import{ getStorage} from './utils';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'employees',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api',
prepareHeaders:(headers)=>{
  const idToken=getStorage("idToken");
  if(idToken){
    headers.set('Authorization',`Bearer ${idToken}`)
  }
  return headers
} }),
  tagTypes:['employees'],
  refetchOnMountOrArgChange:true,
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => '/employee',
      providesTags:['employees'],

    }),
  createEmployee: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (body) => ({
        url: `/employee`,
        method: 'POST',
        body,
      }),
    }),
    getEmployeeById: builder.query({
      query:(id)=>({
        url:`/employee/${id}`,
      
  }),
  transformResponse: response => {
    return response.data;
},
    }),
  
deleteEmployeeById: builder.mutation({
  query:(id)=>({
    url:`/employee/${id}`,
    method:'DELETE',
    
  }),
  invalidatesTags:['employees'],
}),

updateEmployeeById: builder.mutation({
  query:({id ,...empdata})=>({
    url:`/employee/${id}`,
    method:'PUT',
    body:empdata,
  }),
  transformResponse: response => {
    return response.data;
},
}),
Login: builder.mutation({
  query:(payload)=>({
    url:`/employee/login`,
    method:'POST',
    body:payload,
  })
})

  }),

});



export const { useGetEmployeesQuery, useCreateEmployeeMutation ,useGetEmployeeByIdQuery,useDeleteEmployeeByIdMutation,useUpdateEmployeeByIdMutation,useLoginMutation} = api;

export default api;