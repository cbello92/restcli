import {configureStore} from '@reduxjs/toolkit';
import paramReducer from './features/paramSlice';
import headerReducer from './features/headerSlice';
import editorReducer from './features/editorSlice';
import optionActionReducer from './features/optionActionSlice';
import requestResultReducer from './features/requestResultSlice';
import {verbsApi} from './services/verbApi';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    paramReducer,
    headerReducer,
    editorReducer,
    requestResultReducer,
    optionActionReducer,
    [verbsApi.reducerPath]: verbsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(verbsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
