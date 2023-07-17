import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from 'src/axios';
import { AddEmployeeRequest, EmployeesState } from 'src/store/employees/types';
import { Employee, Employees } from 'src/store/types.common';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, thunkApi) => {
    try {
      const res = await $api.get<Employees>('/employees');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось получить список сотрудников: ${error}`
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
        `Не удалось добавить сотрудника: ${error}`
      );
    }
  }
);

export const editEmployee = createAsyncThunk(
  'employees/editEmployee',
  async (payload: { employee: Employee, newData: AddEmployeeRequest }, thunkApi) => {
    try {
      const res = await $api.patch<Employee>(`/employees/edit/${payload.employee._id}`, payload.newData);
      return payload;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось редактировать данные сотрудника: ${error}`
      );
    }
  }
);

export const removeEmployee = createAsyncThunk(
  'employees/removeEmployee',
  async (payload: Employee, thunkApi) => {
    try {
      const res = await $api.delete<Employee>(`/employees/remove/${payload._id}`);
      return payload;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось удалить сотрудника: ${error}`
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
      // state.employees = state.employees.filter((employee) => employee._id !== action.payload._id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<Employees>) => {
        state.employees = action.payload;
        state.filteredEmployees = action.payload;
      }
    );
    builder.addCase(
      addNewEmployee.fulfilled,
      (state, action: PayloadAction<Employee>) => {
        state.newEmployee = action.payload;
        state.employees.push(action.payload);
      }
    );
    builder.addCase(
      editEmployee.fulfilled,
      (state, action: PayloadAction<{ employee: Employee, newData: AddEmployeeRequest }>) => {
        const [prevDataEmployee, newDataEmployee] = [action.payload.employee, action.payload.newData]
        const employee = state.employees.find((employee) => employee._id === prevDataEmployee._id);
        if (employee) {
          Object.assign(employee, newDataEmployee);
        }
      }
    );
    builder.addCase(
      removeEmployee.fulfilled,
      (state, action: PayloadAction<Employee>) => {
        state.employees = state.employees.filter((employee) => employee._id !== action.payload._id);
      }
    );
  },
});

export const { } = usersSlice.actions;
export default usersSlice.reducer;
