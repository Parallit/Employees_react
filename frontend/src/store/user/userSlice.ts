import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from 'src/axios';
import { UserState, editedUserInfo } from './types';
import { userLogout } from '../auth/authSlice';
import { User } from '../types.common';

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, thunkApi) => {
    try {
      const res = await $api.get<User>('/user/current');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось получить информацию о текущем пользователе: ${error}`
      );
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'user/userEditInfo',
  async (payload: editedUserInfo, thunkApi) => {
    try {
      console.log(payload);

      const res = await $api.patch<User>(
        `/user/edit/${payload.userId}`,
        payload
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось редактировать пользователя: ${error}`
      );
    }
  }
);

export const deleteUserProfile = createAsyncThunk(
  'user/deleteUserProfile',
  async (payload: User, thunkApi) => {
    try {
      const res = await $api.delete(`/user/remove/${payload._id}`);
      thunkApi.dispatch(userLogout());
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось удалить профиль пользователя: ${error}`
      );
    }
  }
);

const initialState: UserState = {
  currentUser: {} as User,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCurrentUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.currentUser = action.payload;
      }
    );
    builder.addCase(
      updateUserInfo.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.currentUser = action.payload;
      }
    );
    builder.addCase(deleteUserProfile.fulfilled, (state, _) => {
      state.currentUser = {} as User;
    });
  },
});

export const { } = userSlice.actions;
export default userSlice.reducer;
