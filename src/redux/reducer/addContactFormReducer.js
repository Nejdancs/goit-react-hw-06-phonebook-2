import { createReducer } from '@reduxjs/toolkit';
import { toggleFormAction } from 'redux/actions/addContactFormAction';

export const addContactFormReducer = createReducer(0, {
  [toggleFormAction]: state => {
    state.isOpen = !state.isOpen;
  },
});
