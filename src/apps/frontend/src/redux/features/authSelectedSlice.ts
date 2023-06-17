/* eslint-disable no-unused-vars */
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export enum AuthAllowedEnum {
  NONE = 'None',
  BASIC_AUTH = 'Basic Auth',
  BEARER_TOKEN = 'Bearer Token',
}

export type AuthAllowed = (typeof AuthAllowedEnum)[keyof typeof AuthAllowedEnum];

interface IAuthSelected {
  value: AuthAllowed;
}

const initialState: IAuthSelected = {value: AuthAllowedEnum.NONE};

const authSelectedSlice = createSlice({
  name: 'authSelected',
  initialState: initialState,
  reducers: {
    setAuthSelected: (state, action: PayloadAction<AuthAllowed>) => {
      state.value = action.payload;
    },
  },
});

export const {setAuthSelected} = authSelectedSlice.actions;
export default authSelectedSlice.reducer;
