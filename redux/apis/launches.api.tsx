import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setLaunches } from '../slices/launches.slices';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/',
  }),
  endpoints: (builder) => ({
    postLaunches: builder.mutation({
      query: (page) => ({
        url: '/v5/launches/query',
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

          let newData = [...data.docs];

          await Promise.all(
            data.docs.map(async (item, index) => {
              try {
                const rocketData = await dispatch(
                  launchesApi.endpoints.getRocket.initiate(item.rocket)
                ).unwrap();

                newData[index] = {
                  ...item,
                  rocket: rocketData,
                };
              } catch (error) {
                console.error(error);
              }
            })
          );

          dispatch(setLaunches({ type: 'fetched', data: newData }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getRocket: builder.query({
      query: (id) => `/v4/rockets/${id}`,
    }),
    getLauchDetails: builder.query({
      query: (id) => `/v5/launches/${id}`,
    }),
  }),
});

export const {
  usePostLaunchesMutation,
  useGetRocketQuery,
  useGetLauchDetailsQuery,
} = launchesApi;
