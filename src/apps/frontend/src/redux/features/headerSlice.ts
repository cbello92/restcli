import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

export interface IHeader {
  id?: string;
  checked?: boolean;
  name?: string;
  value?: string;
}

const initialState: IHeader[] = [
  {
    id: uuidv4(),
    checked: false,
    name: '',
    value: '',
  },
];

export const headerSlice = createSlice({
  name: 'header',
  initialState: {value: initialState},
  reducers: {
    addHeader: (state, action: PayloadAction<IHeader>) => {
      state.value.push({id: uuidv4(), checked: false, ...action.payload});
    },
    setHeaderCheckedActive: (state, action: PayloadAction<string>) => {
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
    setValueHeader: (state, action: PayloadAction<IHeader>) => {
      const index = state.value.findIndex(param => param.id === action.payload.id);
      if (index > -1) {
        state.value[index] = {...state.value[index], ...action.payload};
      }
    },
    deleteHeader: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(param => param.id === action.payload);
      if (index > -1 && state.value.length - 1 !== index) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const {addHeader, setHeaderCheckedActive, setChecked, setValueHeader, deleteHeader} = headerSlice.actions;
export default headerSlice.reducer;
