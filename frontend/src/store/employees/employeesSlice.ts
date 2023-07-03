import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from 'src/axios';
import { AddEmployeeRequest, EmployeesState } from './types';
import { Employee, Employees } from '../types.common';

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

export const addNewEmployee = createAsyncThunk(
  'employees/addNewEmployee',
  async (payload: AddEmployeeRequest, thunkApi) => {
    try {
      const res = await $api.post<Employee>('/employees/add', payload);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось добавить работника: ${error}`
      );
    }
  }
);

const initialState: EmployeesState = {
  newEmployee: {} as AddEmployeeRequest,
  employees: [],
  filteredEmployees: [],
};

const usersSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    // доделать
    getFiltered: (state, action: PayloadAction<string>) => {
      state.filteredEmployees = [...state.employees].filter(
        (employee) => employee.firstName === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<Employees>) => {
        state.employees = action.payload;
        state.filteredEmployees = action.payload;
      }
    ),
      builder.addCase(
        addNewEmployee.fulfilled,
        (state, action: PayloadAction<Employee>) => {
          state.newEmployee = action.payload;
          state.employees.push(action.payload);
        }
      );
  },
});

export const { } = usersSlice.actions;
export default usersSlice.reducer;
