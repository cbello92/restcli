/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InputAction} from '../../../../../Contexts/Backoffice/EndpointExecutor/domain/OptionsAction';
import {IParam} from './paramSlice';
import {IHeader} from './headerSlice';

const initialState: InputAction = {
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

export const optionActionSlice = createSlice({
  name: 'optionAction',
  initialState: {value: initialState},
  reducers: {
    setUrlEndpoint: (state, action: PayloadAction<string>) => {
      state.value.url = action.payload;
    },
    setHttpMethod: (state, action: PayloadAction<string>) => {
      state.value.method = action.payload;
    },
    setParamsQuery: (state, action: PayloadAction<IParam[]>) => {
      const params = action.payload.filter(param => param.checked);
      console.log('PARAMS FROM SLICE:::', params);
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
      console.log('HEADERS FROM SLICE:::', headers);
      const headersQuery: Record<string, string> = {};
      headers.forEach(header => {
        if (header.name) {
          headersQuery[header.name] = header.value as string;
        }
      });
      state.value.headers = headersQuery;
    },
    setBody: (state, action: PayloadAction<any>) => {
      if (action.payload !== '' && isJsonString(action.payload)) {
        state.value.body = JSON.parse(action.payload);
      }
    },
  },
});

export const {setUrlEndpoint, setParamsQuery, setHttpMethod, setHeadersQuery, setBody} = optionActionSlice.actions;
export default optionActionSlice.reducer;
