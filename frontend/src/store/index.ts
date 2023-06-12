import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import usersSlice from './users/usersSlice';
import employeesSlice from './employees/employeesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersSlice,
  employees: employeesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
