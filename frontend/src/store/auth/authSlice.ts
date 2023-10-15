import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from 'src/axios';
import axios from 'axios';
import { AuthResponse, AuthState } from 'src/store/auth/types';
import { MyKnownApiError, User } from 'src/store/types.common';

export const userRegistration = createAsyncThunk<
  AuthResponse,
  { firstName: string; lastName: string; email: string; password: string },
  { rejectValue: string }
>(
  'auth/userRegistration',
  async (
    payload,
    { rejectWithValue }
  ) => {
    try {
      const res = await $api.post<AuthResponse>('/user/registration', payload);
      return res.data;
    } catch (error) {
      const err = error as MyKnownApiError
      return rejectWithValue(err.error)
    }
  }
);


export const userLogin = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: string }
>(
  'auth/userLogin',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await $api.post<AuthResponse>('/user/login', payload);
      return res.data;
    } catch (error) {
      const err = error as MyKnownApiError
      return rejectWithValue(err.error)
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
      return thunkApi.rejectWithValue(
        `Не удается получить информацию об авторизации пользователя: ${error}`
      );
    }
  }
);

const initialState: AuthState = {
  AuthUser: {} as User,
  isAuth: false,
  isAuthChecking: false,
  isLoading: false,
  errors: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        userRegistration.pending,
        (state, _) => {
          state.isLoading = true;
          state.errors = ''
        })
      .addCase(
        userRegistration.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          localStorage.setItem('token', action.payload.accessToken);
          state.isLoading = false;
          state.errors = ''
        })
      .addCase(
        userRegistration.rejected,
        (state, action) => {
          state.isLoading = false;
          action.payload ? state.errors = action.payload : state.errors = ''
        });
    builder
      .addCase(
        userLogin.pending,
        (state, _) => {
          state.isLoading = true;
        })
      .addCase(
        userLogin.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          localStorage.setItem('token', action.payload.accessToken);
          state.isAuth = true;
          state.isLoading = false;
          state.AuthUser = action.payload.user;
          state.errors = ''
        }
      )
      .addCase(
        userLogin.rejected,
        (state, action) => {
          state.isLoading = false;
          action.payload ? state.errors = action.payload : state.errors = ''
        });
    builder
      .addCase(userLogout.fulfilled, (state, _) => {
        localStorage.removeItem('token');
        state.isAuth = false;
        state.AuthUser = {} as User;
      });
    builder
      .addCase(
        checkAuthUser.pending,
        (state, _) => {
          state.isAuthChecking = true;
        })
      .addCase(
        checkAuthUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          localStorage.setItem('token', action.payload.accessToken);
          state.AuthUser = action.payload.user;
          state.isAuth = true;
          state.isAuthChecking = false;
          state.errors = ''
        })
      .addCase(
        checkAuthUser.rejected,
        (state, _) => {
          state.isAuthChecking = false;
          state.isAuth = false;
        });
  },
});

export const { } = authSlice.actions;
export default authSlice.reducer;
