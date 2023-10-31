export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  room: string;
  department: string;
  telephone: string;
  about: string;
  position: string;
  avatar: string;
  employeesId: Employee[];
}

export type Users = User[];

export interface Employee {
  employeesId: any;
  _id: string;
  firstName: string;
  lastName: string;
  room: string;
  department: string;
  telephone: string;
  position: string;
  avatar: string;
  userId: User;
}

export type Employees = Employee[];

export type ITitle = string;

export type ITitles = ITitle[];

export interface MyKnownApiError {
  error: string;
}

// export type IAvatar =
//   "dart-maul" |
//   "beard-man" |
//   "it-specialist" |
//   "girl-in-NY-hat" |
//   "girl-with-glasses" |
//   "man-in-hat" |
//   "obi-wan-kenobi" |
//   "old-man-with-glasses" |
//   "woman-with-glasses";

export interface Avatar {
  _id: string;
  name: string;
}
export type Avatars = Avatar[];
