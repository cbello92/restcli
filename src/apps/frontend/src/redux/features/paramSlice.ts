import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

export interface IParam {
  id?: string;
  checked?: boolean;
  name?: string;
  value?: string;
}

const initialState: IParam[] = [
  {
    id: uuidv4(),
    checked: false,
    name: '',
    value: '',
  },
];

export const paramSlice = createSlice({
  name: 'param',
  initialState: {value: initialState},
  reducers: {
    transformParamsFromObject: (state, action: PayloadAction<Record<string, string>>) => {
      const queryParam = action.payload;
      const keysParam = Object.keys(queryParam);
      if (keysParam.length > 0) {
        const params: IParam[] = keysParam.map(key => {
          return {id: uuidv4(), name: key, value: queryParam[key], checked: true};
        });
        state.value = [...params, {id: uuidv4(), checked: false, name: '', value: ''}];
      }
    },
    addParam: (state, action: PayloadAction<IParam>) => {
      state.value.push({id: uuidv4(), checked: false, ...action.payload});
    },
    setParamCheckedActive: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(param => param.id === action.payload);
      if (index > -1) {
        state.value[index].checked = true;
      }
    },
    setChecked: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(param => param.id === action.payload);
      if (index > -1) {
        state.value[index].checked = !state.value[index].checked;
      }
    },
    setValueParam: (state, action: PayloadAction<IParam>) => {
      const index = state.value.findIndex(param => param.id === action.payload.id);
      if (index > -1) {
        state.value[index] = {...state.value[index], ...action.payload};
      }
    },
    deleteParam: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(param => param.id === action.payload);
      if (index > -1 && state.value.length - 1 !== index) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const {
addParam, setParamCheckedActive, setChecked, setValueParam, deleteParam, transformParamsFromObject,
} =
  paramSlice.actions;
export default paramSlice.reducer;
