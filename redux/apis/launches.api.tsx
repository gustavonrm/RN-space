import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setLaunches } from '../slices/launches.slices';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/v5',
  }),
  endpoints: (builder) => ({
    postLaunches: builder.mutation({
      query: (page) => ({
        url: '/launches/query',
        method: 'POST',
        body: {
          query: {},
          options: {
            page: page,
          },
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setLaunches({ type: 'fetched', data: data.docs }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { usePostLaunchesMutation } = launchesApi;
