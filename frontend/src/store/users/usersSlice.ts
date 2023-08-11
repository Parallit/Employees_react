import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from 'src/axios';
import { UsersState } from 'src/store/users/types';
import { Users } from 'src/store/types.common';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkApi) => {
    try {
      const res = await $api.get<Users>('/user/users');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось зарегистрировать пользователя: ${error}`
      );
    }
  }
);

const initialState: UsersState = {
  users: [],
  isLoadingUsers: false
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUsers.pending,
        (state, _) => {
          state.isLoadingUsers = true;
        }
      )
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<Users>) => {
          state.users = action.payload;
          state.isLoadingUsers = false;
        }
      );
  },
});

export const { } = usersSlice.actions;
export default usersSlice.reducer;
