import { createSlice } from '@reduxjs/toolkit';
import { type Person } from '@/types/card';
import { fetchPeople } from '@/redux/thunks';
import { personDTO } from '@/utils/people';

export const peopleSlice = createSlice({
  name: 'people',
  initialState: { people: [] } as { people: Person[] },
  reducers: {
    setPeople: (state, action) => {
      state.people = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      const people = action.payload.map(personDTO);
      state.people = people;
    });
    builder.addCase(fetchPeople.rejected, (_, action) => {
      console.error('Failed to fetch people:', action.payload);
    });
  },
});

export const { setPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
