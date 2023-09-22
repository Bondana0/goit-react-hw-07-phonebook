import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
      filteredContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;