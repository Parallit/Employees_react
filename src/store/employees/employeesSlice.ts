import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from 'src/axios';
import { AddEmployeeRequest, EmployeesState } from 'src/store/employees/types';
import { Employee, Employees, MyKnownApiError } from 'src/store/types.common';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, thunkApi) => {
    try {
      const res = await $api.get<Employees>('/employees/all');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        `Не удалось получить список сотрудников: ${error}`
      );
    }
  }
);

export const addNewEmployee = createAsyncThunk<
  Employee,
  AddEmployeeRequest,
  { rejectValue: string }
>('employees/employee/addNewEmployee', async (payload, { rejectWithValue }) => {
  try {
    const res = await $api.post<Employee>('/employees/employee/add', payload);
    return res.data;
  } catch (error) {
    const err = error as MyKnownApiError;
    return rejectWithValue(err.error);
  }
});

export const editEmployee = createAsyncThunk<
  { employee: Employee; newData: AddEmployeeRequest },
  { employee: Employee; newData: AddEmployeeRequest },
  { rejectValue: string }
>('employees/employee/editEmployee', async (payload, { rejectWithValue }) => {
  try {
    const res = await $api.patch<Employee>(
      `/employees/employee/edit/${payload.employee._id}`,
      payload.newData
    );
    return payload;
  } catch (error) {
    const err = error as MyKnownApiError;
    return rejectWithValue(err.error);
  }
});

export const removeEmployee = createAsyncThunk(
  'employees/employee/removeEmployee',
  async (payload: Employee, thunkApi) => {
    try {
      const res = await $api.delete<Employee>(
        `/employees/employee/remove/${payload._id}`
      );
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
  isLoadingEmployees: false,
  isRemovingEmployee: false,
  employees: [],
  errors: '',
};

const usersSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state, _) => {
        state.isLoadingEmployees = true;
      })
      .addCase(
        fetchEmployees.fulfilled,
        (state, action: PayloadAction<Employees>) => {
          state.employees = action.payload;
          state.isLoadingEmployees = false;
        }
      );
    builder
      .addCase(addNewEmployee.pending, (state, _) => {
        state.isLoadingEmployees = true;
      })
      .addCase(
        addNewEmployee.fulfilled,
        (state, action: PayloadAction<Employee>) => {
          state.isLoadingEmployees = false;
          state.newEmployee = action.payload;
          state.employees.push(action.payload);
        }
      )
      .addCase(addNewEmployee.rejected, (state, action) => {
        state.isLoadingEmployees = false;
        action.payload ? (state.errors = action.payload) : (state.errors = '');
      });
    builder
      .addCase(editEmployee.pending, (state, _) => {
        state.isLoadingEmployees = true;
      })
      .addCase(
        editEmployee.fulfilled,
        (
          state,
          action: PayloadAction<{
            employee: Employee;
            newData: AddEmployeeRequest;
          }>
        ) => {
          state.isLoadingEmployees = false;
          const [prevDataEmployee, newDataEmployee] = [
            action.payload.employee,
            action.payload.newData,
          ];
          const employee = state.employees.find(
            (employee) => employee._id === prevDataEmployee._id
          );
          if (employee) {
            Object.assign(employee, newDataEmployee);
          }
        }
      )
      .addCase(editEmployee.rejected, (state, action) => {
        state.isLoadingEmployees = false;
        action.payload ? (state.errors = action.payload) : (state.errors = '');
      });
    builder
      .addCase(removeEmployee.pending, (state, _) => {
        state.isLoadingEmployees = true;
      })
      .addCase(
        removeEmployee.fulfilled,
        (state, action: PayloadAction<Employee>) => {
          state.isLoadingEmployees = false;
          state.employees = state.employees.filter(
            (employee) => employee._id !== action.payload._id
          );
        }
      )
      .addCase(removeEmployee.rejected, (state, _) => {
        state.isLoadingEmployees = false;
      });
  },
});

export const { ...args } = usersSlice.actions;
export default usersSlice.reducer;
