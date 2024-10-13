import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/v5',
  }),
  endpoints: (builder) => ({
    postLaunches: builder.mutation({
      query: () => ({
        url: '/launches/query',
        method: 'POST',
      }),
      async onQueryStarted({ queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { usePostLaunchesMutation } = launchesApi;
