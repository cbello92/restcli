import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import paramReducer from './features/paramSlice';
import {verbsApi} from './services/verbApi';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {counterReducer, paramReducer, [verbsApi.reducerPath]: verbsApi.reducer},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(verbsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
