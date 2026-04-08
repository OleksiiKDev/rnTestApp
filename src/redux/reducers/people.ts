import { createSlice } from '@reduxjs/toolkit';
import { type Person } from '@/types/card';
import { addToFavourites, fetchFavourites, fetchPeople, removeFromFavourites } from '@/redux/thunks';
import { personDTO } from '@/utils/people';

export const peopleSlice = createSlice({
  name: 'people',
  initialState: { people: [], favouriteIds: [] } as {
    people: Person[];
    favouriteIds: string[];
  },
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
    builder.addCase(fetchFavourites.fulfilled, (state, action) => {
      state.favouriteIds = action.payload;
    });
    builder.addCase(fetchFavourites.rejected, (_, action) => {
      console.error('Failed to fetch favourites:', action.payload);
    });
      builder.addCase(addToFavourites.fulfilled, (state, action) => {
        state.favouriteIds.push(action.payload);
      });
      builder.addCase(addToFavourites.rejected, (_, action) => {
        console.error('Failed to add to favourites:', action.payload);
      });
      builder.addCase(removeFromFavourites.fulfilled, (state, action) => {
        state.favouriteIds = state.favouriteIds.filter(id => id !== action.payload);
      });
      builder.addCase(removeFromFavourites.rejected, (_, action) => {
        console.error('Failed to remove from favourites:', action.payload);
      }); 
  },
});

export const { setPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
