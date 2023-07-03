export interface User {
  _id: string;
  name: string;
  email: string;
  room: string;
  department: string;
  telephone: string;
  about: string;
  employeesId: Employee[];
}

export type Users = User[];

export interface Employee {
  _id: string;
  firstName: string;
  lastName: string;
  room: string;
  department: string;
  telephone: string;
  position: string;
  userId: User;
}

export type Employees = Employee[];
