import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from 'src/axios';
import axios from 'axios';
import { AuthResponse, AuthState } from 'src/store/auth/types';
import { User } from 'src/store/types.common';

export const userRegistration = createAsyncThunk(
  'auth/userRegistration',
  async (
    payload: { name: string; email: string; password: string },
    thunkApi
  ) => {
    try {
      const res = await $api.post<AuthResponse>('/user/registration', payload);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось зарегистрировать пользователя: ${error}`
      );
    }
  }
);
export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (payload: { email: string; password: string }, thunkApi) => {
    try {
      const res = await $api.post<AuthResponse>('/user/login', payload);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(`Не удается авторизоваться: ${error}`);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/userLogout',
  async (_, thunkApi) => {
    try {
      await $api.post('/user/logout');
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(`Не удается выйти: ${error}`);
    }
  }
);

export const checkAuthUser = createAsyncThunk(
  'auth/checkAuthUser',
  async (_, thunkApi) => {
    try {
      const res = await axios.get<AuthResponse>(
        `${process.env.REACT_APP_BASE_URL}/user/refresh`,
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      console.log('Error', error);
      return thunkApi.rejectWithValue(
        `Не удается получить информацию об авторизации пользователя: ${error}`
      );
    }
  }
);

const initialState: AuthState = {
  AuthUser: {} as User,
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      userLogin.fulfilled,
      (state, action: PayloadAction<AuthResponse>) => {
        localStorage.setItem('token', action.payload.accessToken);
        state.isAuth = true;
        state.AuthUser = action.payload.user;
      }
    );
    builder.addCase(userLogout.fulfilled, (state, _) => {
      localStorage.removeItem('token');
      state.isAuth = false;
      state.AuthUser = {} as User;
    });
    builder.addCase(checkAuthUser.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(
      checkAuthUser.fulfilled,
      (state, action: PayloadAction<AuthResponse>) => {
        localStorage.setItem('token', action.payload.accessToken);
        state.isAuth = true;
        state.AuthUser = action.payload.user;
        state.isLoading = false;
      }
    );
    builder.addCase(checkAuthUser.rejected, (state, _) => {
      state.isAuth = false;
      state.isLoading = false;
    });
  },
});

export const { } = authSlice.actions;
export default authSlice.reducer;
