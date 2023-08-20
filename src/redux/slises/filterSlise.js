import { createSlice } from '@reduxjs/toolkit';

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { filteredContacts } = filterSlise.actions;
