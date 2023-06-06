import {ErrorRequest} from '../../entity/ErrorRequest';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface RequestResultState {
  isActiveRequest: boolean;
  isLoadingResult: boolean;
  errorRequest: ErrorRequest;
  status: number | null;
}

const initialState: RequestResultState = {
  isActiveRequest: false,
  isLoadingResult: false,
  errorRequest: {},
  status: null,
};

const requestResult = createSlice({
  name: 'requestResult',
  initialState: {value: initialState},
  reducers: {
    setActiveRequest: state => {
      state.value.isActiveRequest = true;
    },
    setLoadingResult: state => {
      state.value.isLoadingResult = !state.value.isLoadingResult;
    },
    setInformationErrorRequest: (state, action: PayloadAction<ErrorRequest>) => {
      state.value.errorRequest = action.payload;
    },
    setStatusRequest: (state, action: PayloadAction<number | null>) => {
      state.value.status = action.payload;
    },
  },
});

export const {setActiveRequest, setLoadingResult, setInformationErrorRequest, setStatusRequest} = requestResult.actions;

export default requestResult.reducer;
