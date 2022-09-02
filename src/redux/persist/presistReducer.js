import persistReducer from 'redux-persist/es/persistReducer';
import { addContactFormReducer } from 'redux/reducer/addContactFormReducer';
import { contactsReducer } from 'redux/reducer/contactsReducer';
import { filterReducer } from 'redux/reducer/filterReduce';
import {
  persistContactsConfig,
  persistFilterConfig,
  persistFormConfig,
} from './persistConfig';

export const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer
);

export const persistedFilterReducer = persistReducer(
  persistFilterConfig,
  filterReducer
);

export const persistedContactFormReducer = persistReducer(
  persistFormConfig,
  addContactFormReducer
);
