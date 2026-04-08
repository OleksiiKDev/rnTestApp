import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchList } from '@/api/fetch-list';
import { type DetailedPerson } from '@/types/api/fetch-list';

export const fetchPeople = createAsyncThunk<DetailedPerson[]>(
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
