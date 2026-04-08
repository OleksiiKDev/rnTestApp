import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

export const peopleList = createSelector(
  (state: RootState) => state.people,
  people => people.people,
);
