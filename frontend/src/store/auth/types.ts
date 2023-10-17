import { User } from 'src/store/types.common';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface AuthState {
  AuthUser: User;
  isAuthChecking: boolean;
  isAuth: boolean | null;
  isLoading: boolean;
  errors: string
}