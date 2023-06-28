import { Employee, User } from "../types.common";

export interface editedUserInfo {
    userId: string,
    room: string;
    department: string;
    telephone: string;
    about: string;
}

export interface UserState {
    currentUser: CurrentUserDto;
}

export interface CurrentUserDto {
    id: string;
    name: string;
    email: string;
    room: string;
    department: string;
    telephone: string;
    about: string;
    employeesId: Employee[];
}