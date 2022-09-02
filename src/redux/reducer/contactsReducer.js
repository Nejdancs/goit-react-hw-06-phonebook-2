import { createReducer } from '@reduxjs/toolkit';
import { add, remove } from 'redux/actions/contactsActions';

export const contactsReducer = createReducer(0, {
  [add]: (state, action) => {
    state.value.push(action.payload);
  },
  [remove]: (state, action) => {
    return {
      value: state.value.filter(({ id }) => id !== action.payload),
    };
  },
});
