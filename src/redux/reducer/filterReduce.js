import { createReducer } from '@reduxjs/toolkit';
import { set, toggleFilterAction } from 'redux/actions/filterAction';

export const filterReducer = createReducer(0, {
  [set]: (state, action) => {
    return { ...state, value: action.payload };
  },
  [toggleFilterAction]: state => {
    state.isOpen = !state.isOpen;
  },
});
