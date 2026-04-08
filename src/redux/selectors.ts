import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';

export const peopleState = (state: RootState) => state.people;

export const peopleList = createSelector(
  peopleState,
  people => people.people,
);

export const personById = (id: string) =>
  createSelector(
    peopleState,
    people => people.people.find(person => person.id === id),
  );
