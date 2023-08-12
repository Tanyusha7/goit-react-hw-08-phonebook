import { combineReducers } from 'redux';
import { contactsReducer } from './phoneBook/contactsSlice';
import { filterReducer } from './phoneBook/filterSlice';
import { authReduser } from './auth/auth_slice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReduser,
});
