import {configureStore} from '@reduxjs/toolkit';
import paramReducer from './features/paramSlice';
import headerReducer from './features/headerSlice';
import editorReducer from './features/editorSlice';
import optionActionReducer from './features/requestOptionSlice';
import requestResultReducer from './features/requestResultSlice';
import authSelectedReducer from './features/authSelectedSlice';
import basicAuthReducer from './features/authSlice';

import {verbsApi} from './services/verbApi';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    paramReducer,
    headerReducer,
    editorReducer,
    requestResultReducer,
    authSelectedReducer,
    basicAuthReducer,
    optionActionReducer,
    [verbsApi.reducerPath]: verbsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(verbsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
