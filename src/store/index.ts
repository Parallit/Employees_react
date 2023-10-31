import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from 'src/store/auth/authSlice';
import usersSlice from 'src/store/users/usersSlice';
import employeesSlice from 'src/store/employees/employeesSlice';
import userSlice from 'src/store/user/userSlice';
import avatarsSlice from './avatars/avatarsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersSlice,
  employees: employeesSlice,
  user: userSlice,
  avatars: avatarsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
