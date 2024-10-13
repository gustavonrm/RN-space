import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LaunchesState {
  fetched: [];
  favorites: [];
}

const initialState: LaunchesState = {
  fetched: [],
  favorites: [],
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
  },
});

export const { setLaunches } = launchesSlice.actions;

export default launchesSlice.reducer;

export const selectFetchedLaunches = (state) => state.launches.fetched;
export const selectFavoriteLaunches = (state) => state.launches.favorite;
