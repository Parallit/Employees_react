import { User } from 'src/store/types.common';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface AuthState {
  AuthUser: User;
  isUserChecked: boolean;
  isAuthChecking: boolean;
  isAuth: boolean;
  isLoading: boolean;
  errors: string
}