import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InputAction} from '../../../../../Contexts/Backoffice/EndpointExecutor/domain/OptionsAction';
import {IParam} from './paramSlice';

const initialState: InputAction = {
  url: '',
  method: 'GET',
  headers: {},
  params: {},
  body: '',
};

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
  },
});

export const {setUrlEndpoint, setParamsQuery, setHttpMethod} = optionActionSlice.actions;
export default optionActionSlice.reducer;
