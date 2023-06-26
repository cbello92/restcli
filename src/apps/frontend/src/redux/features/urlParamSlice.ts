/* eslint-disable max-len */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

export interface IParam {
  id?: string;
  checked?: boolean;
  name?: string;
  value?: string;
}

export interface IUrlParams {
  params: IParam[];
  url: string;
  searchPlain?: string;
}

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
      state.value.params = [...params, {id: uuidv4(), checked: false, name: '', value: ''}];
    },
    addParam: (state, action: PayloadAction<IParam>) => {
      state.value.params.push({id: uuidv4(), checked: false, ...action.payload});
    },
    setParamCheckedActive: (state, action: PayloadAction<string>) => {
      const index = state.value.params.findIndex(param => param.id === action.payload);
      if (index > -1) {
        state.value.params[index].checked = true;
      }
    },
    setChecked: (state, action: PayloadAction<string>) => {
      const index = state.value.params.findIndex(param => param.id === action.payload);
      if (index > -1) {
        const newStatusChecked = !state.value.params[index].checked;
        state.value.params[index].checked = newStatusChecked;
      }
    },
    setValueParam: (state, action: PayloadAction<IParam>) => {
      const index = state.value.params.findIndex(param => param.id === action.payload.id);
      if (index > -1) {
        state.value.params[index] = {...state.value.params[index], ...action.payload};
      }
    },
    deleteParam: (state, action: PayloadAction<string>) => {
      const index = state.value.params.findIndex(param => param.id === action.payload);
      if (index > -1 && state.value.params.length - 1 !== index) {
        state.value.params.splice(index, 1);
      }
    },
    setUrlUi: (state, action: PayloadAction<string>) => {
      state.value.url = action.payload;
    },
    setUrlParams: (state, action: PayloadAction<IParam[]>) => {
      const paramsFilter = action.payload.filter(param => param.checked === true);
      let paramObj = {};
      paramsFilter.forEach(param => {
        paramObj = {...paramObj, [param.name as string]: param.value};
      });

      const search = new URLSearchParams(paramObj).toString();
      state.value.url = `${state.value.url.split('?')[0]}${search === '' ? '' : `?${search}`}`;
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
  setUrlParams,
} = urlParamsSlice.actions;
export default urlParamsSlice.reducer;
