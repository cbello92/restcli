/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IRequestOptionExtra} from '../../../../../Contexts/Backoffice/EndpointExecutor/domain/RequestOption';
import {IParam} from './paramSlice';
import {IHeader} from './headerSlice';

const initialState: IRequestOptionExtra = {
  url: '',
  method: 'GET',
  headers: {},
  params: {},
  body: '',
};

export function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const requestOptionSlice = createSlice({
  name: 'optionAction',
  initialState: {value: initialState},
  reducers: {
    setUrlEndpoint: (state, action: PayloadAction<string>) => {
      state.value.url = action.payload;
    },
    setHttpMethod: (state, action: PayloadAction<string>) => {
      state.value.method = action.payload;
    },
    setParamsQueryChecked: (state, action: PayloadAction<IParam[]>) => {
      const params = action.payload.filter(param => param.checked);
      const paramsQuery: Record<string, string> = {};
      params.forEach(param => {
        if (param.name) {
          paramsQuery[param.name] = param.value as string;
        }
      });
      state.value.params = paramsQuery;
    },
    setHeadersQuery: (state, action: PayloadAction<IHeader[]>) => {
      const headers = action.payload.filter(param => param.checked);
      const headersQuery: Record<string, string> = {};
      headers.forEach(header => {
        if (header.name) {
          headersQuery[header.name] = header.value as string;
        }
      });
      if (state.value.headers?.Authorization) {
        headersQuery['Authorization'] = state.value.headers['Authorization'];
      }
      state.value.headers = headersQuery;
    },
    setHeaderPartial: (state, action: PayloadAction<Record<string, string>>) => {
      state.value.headers = {...state.value.headers, ...action.payload};
    },
    deleteAuthorization: state => {
      if (state.value.headers?.Authorization) {
        delete state.value.headers?.Authorization;
      }
    },
    setBody: (state, action: PayloadAction<any>) => {
      if (action.payload !== '' && isJsonString(action.payload)) {
        state.value.body = JSON.parse(action.payload);
      }
    },
  },
});

export const {
  setUrlEndpoint,
  setParamsQueryChecked,
  setHttpMethod,
  setHeadersQuery,
  setBody,
  setHeaderPartial,
  deleteAuthorization,
} = requestOptionSlice.actions;
export default requestOptionSlice.reducer;
