export interface User {
  _id: string;
  email: string;
  name: string;
  address: string;
  department: string;
  telephone: string;
  employees: [];
}

export type Users = User[];

export interface UsersState {
  users: Users;
}
