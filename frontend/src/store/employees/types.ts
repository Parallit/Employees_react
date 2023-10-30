import { Employees } from 'src/store/types.common';

export interface EmployeesState {
  employees: Employees;
  newEmployee: AddEmployeeRequest;
  isLoadingEmployees: boolean;
  isRemovingEmployee: boolean;
  errors: string
}

export interface AddEmployeeRequest {
  firstName: string;
  lastName: string;
  room: string;
  department: string;
  telephone: string;
  position: string;
}

