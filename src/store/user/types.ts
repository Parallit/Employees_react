import { User } from 'src/store/types.common';

export interface editedUserInfo {
  userId: string;
  firstName: string;
  lastName: string;
  position: string;
  room: string;
  department: string;
  telephone: string;
  about: string;
  avatar: string;
}

export interface UserState {
  currentUser: User;
  isLoadingUser: boolean;
  errors: string;
}
