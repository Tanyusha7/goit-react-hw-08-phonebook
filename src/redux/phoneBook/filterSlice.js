import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    visibleContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { visibleContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
