import { Employee, Employees } from "../types.common";

export interface EmployeesState {
  employees: Employees;
  newEmployee: AddEmployeeRequest;
  filteredEmployees: Employees
}

export interface AddEmployeeRequest {
  firstName: string;
  lastName: string;
  room: string;
  department: string;
  telephone: string;
  position: string;
}
