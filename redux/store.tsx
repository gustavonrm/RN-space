import { combineReducers, configureStore } from '@reduxjs/toolkit';
import launchesReducer from './slices/launches.slices';
import { launchesApi } from './apis/launches.api';

const rootReducer = combineReducers({
  launches: launchesReducer,
  [launchesApi.reducerPath]: launchesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(launchesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
