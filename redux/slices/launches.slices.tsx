import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LaunchesState {
  fetched: [];
  favorites: [];
  filtering: boolean;
}

const initialState: LaunchesState = {
  fetched: [],
  favorites: [],
  filtering: false,
};

export const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    setLaunches: (state, action) => {
      state[action.payload.type] = state[action.payload.type].concat(
        action.payload.data
      );
    },
    setFiltering: (state, action) => {
      console.log(action);
      state.filtering = !state.filtering;
    },
  },
});

export const { setLaunches, setFiltering } = launchesSlice.actions;

export default launchesSlice.reducer;

export const selectFetchedLaunches = (state) => state.launches.fetched;
export const selectFavoriteLaunches = (state) => state.launches.favorite;
export const selectFiltering = (state) => state.launches.filtering;
