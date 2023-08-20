import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlise } from './slises/contactSlise';
import { filterSlise } from './slises/filterSlise';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducer = combineReducers({
  contacts: contactSlise.reducer,
  filter: filterSlise.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

