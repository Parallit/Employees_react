export interface Employee {
  _id: string;
  email: string;
  name: string;
}

export type Employees = Employee[];

export interface EmployeesState {
  employees: Employees;
}
