import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from 'src/store/auth/authSlice';
import usersSlice from 'src/store/users/usersSlice';
import employeesSlice from 'src/store/employees/employeesSlice';
import userSlice from 'src/store/user/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersSlice,
  employees: employeesSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
