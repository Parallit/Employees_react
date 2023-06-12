import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from '../../axios';
import { Employees, EmployeesState } from './types';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, thunkApi) => {
    try {
      const res = await $api.get<Employees>('/employees');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось получить список работников: ${error}`
      );
    }
  }
);

const initialState: EmployeesState = {
  employees: [],
};

const usersSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<Employees>) => {
        state.employees = action.payload;
      }
    );
  },
});

export const { ...args } = usersSlice.actions;
export default usersSlice.reducer;
