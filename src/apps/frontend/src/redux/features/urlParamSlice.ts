/* eslint-disable max-len */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import {IParam, IUrlParams} from '../entity/params.interface';
import {setUrlWithParams} from '../util/setUrlParams';

const initialState: IUrlParams = {
  url: '',
  params: [
    {
      id: uuidv4(),
      checked: false,
      name: '',
      value: '',
    },
  ],
};

export const urlParamsSlice = createSlice({
  name: 'urlParams',
  initialState: {value: initialState},
  reducers: {
    transformParamsFromObject: (state, action: PayloadAction<Record<string, string>>) => {
      const queryParam = action.payload;
      const keysParam = Object.keys(queryParam);
      const params: IParam[] = keysParam.map(key => {
        return {id: uuidv4(), name: key, value: queryParam[key], checked: true};
      });
      state.value.url = setUrlWithParams(state.value.url, params);
      state.value.params = [...params, {id: uuidv4(), checked: false, name: '', value: ''}];
    },
    addParam: (state, action: PayloadAction<IParam>) => {
      state.value.params.push({id: uuidv4(), checked: false, ...action.payload});
    },
    setParamCheckedActive: (state, action: PayloadAction<string>) => {
      const index = state.value.params.findIndex(param => param.id === action.payload);
      if (index > -1) {
        state.value.params[index].checked = true;
        state.value.url = setUrlWithParams(state.value.url, state.value.params);
      }
    },
    setChecked: (state, action: PayloadAction<string>) => {
      const index = state.value.params.findIndex(param => param.id === action.payload);
      if (index > -1) {
        const newStatusChecked = !state.value.params[index].checked;
        state.value.params[index].checked = newStatusChecked;
        state.value.url = setUrlWithParams(state.value.url, state.value.params);
      }
    },
    setValueParam: (state, action: PayloadAction<IParam>) => {
      const index = state.value.params.findIndex(param => param.id === action.payload.id);
      if (index > -1) {
        state.value.params[index] = {...state.value.params[index], ...action.payload};
        state.value.url = setUrlWithParams(state.value.url, state.value.params);
      }
    },
    deleteParam: (state, action: PayloadAction<string>) => {
      const index = state.value.params.findIndex(param => param.id === action.payload);
      if (index > -1 && state.value.params.length - 1 !== index) {
        state.value.params.splice(index, 1);
        state.value.url = setUrlWithParams(state.value.url, state.value.params);
      }
    },
    setUrlUi: (state, action: PayloadAction<string>) => {
      state.value.url = action.payload;
    },
  },
});

export const {
  addParam,
  setParamCheckedActive,
  setChecked,
  setValueParam,
  deleteParam,
  transformParamsFromObject,
  setUrlUi,
} = urlParamsSlice.actions;
export default urlParamsSlice.reducer;
