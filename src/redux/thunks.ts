import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchList } from '@/api/fetch-list';
import { type DetailedPerson } from '@/types/api/fetch-list';
import asyncStorage from '@/api/async-storage';
import { RootState } from './store';

const FAVOURITES_KEY = 'favouriteIds';

export const fetchPeople = createAsyncThunk<DetailedPerson[]>(
  'people/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchList();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchFavourites = createAsyncThunk<string[]>(
  'people/fetchFavourites',
  async (_, { rejectWithValue }) => {
    try {
      const response = await asyncStorage.getJson<string[]>(FAVOURITES_KEY);
      return response || [];
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addToFavourites = createAsyncThunk<string, string>(
  'people/addToFavourites',
  async (personId, { getState }) => {
    const state = getState() as RootState;
    const favouriteIds = state.people.favouriteIds;
    const updatedFavourites = [...favouriteIds, personId];
    try {
      await asyncStorage.setJson(FAVOURITES_KEY, updatedFavourites);
      return personId;
    } catch (error) {
      console.error('Failed to add to favourites:', error);
      throw error;
    }
  },
);

export const removeFromFavourites = createAsyncThunk<string, string>(
  'people/removeFromFavourites',
  async (personId, { getState }) => {
    const state = getState() as RootState;
    const favouriteIds = state.people.favouriteIds;
    const updatedFavourites = favouriteIds.filter(id => id !== personId);
    try {
      await asyncStorage.setJson(FAVOURITES_KEY, updatedFavourites);
      return personId;
    } catch (error) {
      console.error('Failed to remove from favourites:', error);
      throw error;
    }
  },
);
