import { User } from 'src/store/types.common';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface AuthState {
  AuthUser: User;
  isAuth: boolean;
  isLoading: boolean;
  errors: string
}