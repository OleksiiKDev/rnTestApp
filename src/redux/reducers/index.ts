import { combineReducers } from '@reduxjs/toolkit';
import PeopleSlice from './people';

const rootReducers = combineReducers({
  people: PeopleSlice,
});

export default rootReducers;
