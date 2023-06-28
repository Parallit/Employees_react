import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from 'src/axios';
import { CurrentUserDto, UserState, editedUserInfo } from './types';
import { userLogout } from '../auth/authSlice';

export const fetchCurrentUser = createAsyncThunk(
    'user/fetchCurrentUser',
    async (_, thunkApi) => {
        try {
            const res = await $api.get<CurrentUserDto>('/user/current');
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(
                `Не удалось получить информацию о текущем пользователе: ${error}`
            );
        }
    }
)

export const updateUserInfo = createAsyncThunk(
    'user/userEditInfo',
    async (payload: editedUserInfo, thunkApi) => {
        try {
            const res = await $api.patch<CurrentUserDto>(`/user/edit/${payload.userId}`, payload)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(
                `Не удалось редактировать пользователя: ${error}`
            );
        }
    }
)

export const deleteUserProfile = createAsyncThunk(
    'user/deleteUserProfile',
    async (payload: CurrentUserDto, thunkApi) => {
        try {
            const res = await $api.delete(`/user/remove/${payload.id}`)
            thunkApi.dispatch(userLogout())
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(
                `Не удалось удалить профиль пользователя: ${error}`
            );
        }
    }
)

const initialState: UserState = {
    currentUser: {} as CurrentUserDto,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchCurrentUser.fulfilled,
            (state, action: PayloadAction<CurrentUserDto>) => {
                state.currentUser = action.payload;
            }
        );
        builder.addCase(
            updateUserInfo.fulfilled,
            (state, action: PayloadAction<CurrentUserDto>) => {
                state.currentUser = action.payload;
            }
        );
        builder.addCase(
            deleteUserProfile.fulfilled,
            (state, _) => {
                state.currentUser = {} as CurrentUserDto;
            }
        );
    },

});

export const { } = userSlice.actions;
export default userSlice.reducer;