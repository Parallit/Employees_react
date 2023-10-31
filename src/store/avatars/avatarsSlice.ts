import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from 'src/axios';
import { AvatarsState } from './types';
import { Avatars } from '../types.common';

export const fetchAvatars = createAsyncThunk(
  'avatars/fetchAvatars',
  async (_, thunkApi) => {
    try {
      const res = await $api.get<Avatars>('/avatars/all');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось получить список аватар: ${error}`
      );
    }
  }
);

const initialState: AvatarsState = {
  avatars: [],
  isLoadingAvatars: false,
};

const avatarsSlice = createSlice({
  name: 'avatars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvatars.pending, (state, _) => {
        state.isLoadingAvatars = true;
      })
      .addCase(
        fetchAvatars.fulfilled,
        (state, action: PayloadAction<Avatars>) => {
          state.avatars = action.payload;
          state.isLoadingAvatars = false;
        }
      );
  },
});

export const { ...args } = avatarsSlice.actions;
export default avatarsSlice.reducer;
