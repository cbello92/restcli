import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editor',
  initialState: {value: ''},
  reducers: {
    setEditorValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {setEditorValue} = editorSlice.actions;
export default editorSlice.reducer;
