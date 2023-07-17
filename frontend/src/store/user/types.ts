import { User } from 'src/store/types.common';

export interface editedUserInfo {
  userId: string;
  room: string;
  department: string;
  telephone: string;
  about: string;
}

export interface UserState {
  currentUser: User;
}
