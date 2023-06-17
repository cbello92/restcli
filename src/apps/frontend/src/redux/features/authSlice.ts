import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface IBasicAuth {
  username: string;
  password: string;
}

const initialState: IBasicAuth = {
  username: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {value: initialState},
  reducers: {
    setBasicAuth: (state, action: PayloadAction<Partial<IBasicAuth>>) => {
      state.value = {...state.value, ...action.payload};
    },
    authReset: state => {
      state.value = initialState;
    },
  },
});

export const {setBasicAuth, authReset} = authSlice.actions;
export default authSlice.reducer;
