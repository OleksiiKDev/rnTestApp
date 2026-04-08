import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchList } from '@/api/fetch-list';
import { type Person } from '@/types/card';

export const fetchPeople = createAsyncThunk<Person[]>(
  'people/fetch',
  async (_, {  rejectWithValue }) => {
    try {
      const data = await fetchList();
      return data.results
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
